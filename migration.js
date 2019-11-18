var mysql = require('mysql');
var migration = require('mysql-migrations');
var app = require('express')();
var express = require('express');
var http = require('http').createServer(app);
var port = process.env.PORT || 3000;

//importing script
const retrieve = require('./controller/feeds_myday')


var connection = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'database_android'
});



app.post('/accounts/create', function (req, res) {
    console.log(req.headers.username);
    let stmt = "INSERT INTO `accounts`(`username`, `email`, `password`, `type`, `created_at`) VALUES ('" + req.headers.username + "','" + req.headers.email + "','" + req.headers.password + "','" + req.headers.type + "','" + req.headers.created_at + "')"
    connection.query(stmt, function (error, results, fields) {
        if (error) {
            console.log("error")
            res.json({
                message: "Duplicate entry of username"
            });
            return;
        }
        throw error;
        res.send(results[1]);
        return;
    });
})


app.post('/feeds/mydays', (req,res) => {
    
})

migration.init(connection, __dirname + '/migrations');

http.listen(port, function () {
    console.log('listening on *: ' + port);
});