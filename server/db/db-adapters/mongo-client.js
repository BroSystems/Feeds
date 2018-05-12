const MongoClient = require('mongodb').MongoClient;
const DB_URI = "mongodb://localhost:27017/feeds";
const defaultTables = ["Logger", "Users", "Groups"];


const mongoRequest = (dbCallBack) => {
    MongoClient.connect(DB_URI, (err, db) => {
        if (err) {
            return console.dir(err);
        }
        dbCallBack(err, db);
    });
}

module.exports = (options) => {
    const createDefaultTables = (err, db) => {
        defaultTables.forEach((table) => {
            db.createCollection(table, (err, collection) => {});
        })
    }

    const createNewGroup = (user, groupData) => {
        mongoRequest((err, db) => {
            currentSession = db.collection("Groups");
            currentSession.insert({
                user,
                groupData
            });
        })
    };


    return {
        connect: () => {
            mongoRequest(createDefaultTables)
        },
        createNewGroup
    }


};