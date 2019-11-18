var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'database_android'
});
console.log("connecting to DB..,");

connection.connect(function (err) {
    if (err) {
        console.log(err);
    };
    console.log("Connected to MySQL DB!");
});

module.exports = { connection }