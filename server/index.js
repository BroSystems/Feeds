const express = require('express');
const app = express();
const db = require("./db/db-connector");


app.use(express.static('public'));
app.use("/users", require('./routes/users'));
app.use("/groups", require('./routes/groups'));

const server = app.listen(8000, () => {
    let host = server.address().address
    let port = server.address().port

    console.log("app listening at http://%s:%s", host, port)

})