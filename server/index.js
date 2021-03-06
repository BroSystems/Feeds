const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");

require("./models/User");
require("./models/Group");
require("./services/passport");
const mongoUri = `mongodb://localhost:27017/app`;
const cookieMaxAge = 30 * 24 * 60 * 60 * 1000;
mongoose.Promise = global.Promise;
mongoose.connect(mongoUri, { useMongoClient: true });

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: cookieMaxAge,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/groupsRoutes")(app);
//require("./routes/usersRoutes")(app);
//require("./routes/messageRoutes")(app);

if (["production"].includes(process.env.NODE_ENV)) {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve("client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});
