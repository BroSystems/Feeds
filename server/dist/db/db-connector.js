"use strict";

var options = {};
var Mongos = require("./db-adapters/mongo-client")(options);
Mongos.connect();
module.exports = Mongos;