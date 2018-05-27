const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Group = mongoose.model("Group");

module.exports = app => {
  app.get("/api/groups/:id", requireLogin, async (req, res) => {
    const group = await group.findOne({
      _group: req.group.id,
      _id: req.params.id
    });

    res.send(blog);
  });

  app.get("/api/groups/:id", requireLogin, async (req, res) => {
    const groups = await group.find({ _group: req.group.id });
    res.send(groups);
  });

  app.post("/api/groups", requireLogin, async (req, res) => {
    const { title, content } = req.body;
    console.log(req.user.id);
    const group = new Group({
      title,
      content,
      _user: req.user.id
    });

    try {
      await group.save();
      res.send(group);
    } catch (err) {
      res.send(400, err);
    }
  });
};
