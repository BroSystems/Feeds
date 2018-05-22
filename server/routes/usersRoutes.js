const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const User = mongoose.model("User");

module.exports = app => {
  app.get("/api/users/:id", requireLogin, async (req, res) => {
    const user = await User.findOne({
      _user: req.user.id,
      _id: req.params.id
    });

    res.send(blog);
  });

  app.get("/api/users", requireLogin, async (req, res) => {
    const users = await User.find({ _user: req.user.id });
    res.send(users);
  });

  app.post("/api/users", requireLogin, async (req, res) => {
    const { title, content } = req.body;
    const user = new User({
      title,
      content,
      _user: req.user.id
    });

    try {
      await user.save();
      res.send(user);
    } catch (err) {
      res.send(400, err);
    }
  });
};
