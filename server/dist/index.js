'use strict';

var express = require('express');
var app = express();
var db = require("./db/db-connector");

app.use(express.static('public'));
app.use("/users", require('./routes/users'));
app.use("/groups", require('./routes/groups'));

var server = app.listen(8000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("app listening at http://%s:%s", host, port);
});