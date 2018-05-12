"use strict";

var MongoClient = require('mongodb').MongoClient;
var DB_URI = "mongodb://localhost:27017/feeds";
var defaultTables = ["Logger", "Users", "Groups"];

var mongoRequest = function mongoRequest(dbCallBack) {
    MongoClient.connect(DB_URI, function (err, db) {
        if (err) {
            return console.dir(err);
        }
        dbCallBack(err, db);
    });
};

module.export = function (options) {
    var createDefaultTables = function createDefaultTables(err, db) {
        defaultTables.forEach(function (table) {
            db.createCollection(table, function (err, collection) {});
        });
    };

    var createNewGroup = function createNewGroup(user, groupData) {
        mongoRequest(function (err, db) {
            currentSession = db.collection("Groups");
            currentSession.insert({
                user: user,
                groupData: groupData
            });
        });
    };

    return {
        connect: function connect() {
            mongoRequest(createDefaultTables);
        },
        createNewGroup: createNewGroup
    };
};