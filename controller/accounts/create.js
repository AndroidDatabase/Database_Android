const connection = require('../../system/dbConfig');
let createAccount = (req, res) => {
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    let type = req.body.type;
    let created_at = Date.now();
    let updated_at = null;
    let deleted_at = null;

    // let statement = 'INSERT INTO `accounts`(`username`, `email`, `password`, `type`, `created_at`) VALUES ('${ username }','${ email } ','${ password } ','${ type } ','${ created_at } ')';

    let statement = "INSERT INTO `accounts`( `username`, `email`, `password`, `type`, `created_at`) VALUES (chan,chan@gmail.com,test,admin,2019/11/18)";

    connection.query(statement, (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Saved!");
            connection.end();
        }
        res.send(data)
    })
}