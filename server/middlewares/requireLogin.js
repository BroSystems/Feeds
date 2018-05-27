module.exports = (req, res, next) => {
  if (["production"].includes(process.env.NODE_ENV)) {
    if (!req.user) {
      return res.status(401).send({ error: "You must log in!" });
    }
  }

  next();
};
