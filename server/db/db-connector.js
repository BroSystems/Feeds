const options = {}
const Mongos = require("./db-adapters/mongo-client")(options);
Mongos.connect();
module.exports = Mongos;