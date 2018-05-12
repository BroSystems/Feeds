'use strict';

var express = require('express');
var app = express();

var _require = require('./routes/index'),
    groups = _require.groups,
    users = _require.users;

console.log(groups);
console.log(users);
app.use(express.static('public'));
app.use("/users", users);
app.use("/groups", groups);

var server = app.listen(8000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("app listening at http://%s:%s", host, port);
});