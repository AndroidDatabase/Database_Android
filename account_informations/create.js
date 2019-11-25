//config db connection
const connection = require('../system/db_connection')
const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let create = (req, res) => {
  const account_id = parseInt(req.body.account_id, 10);
  const first_name = req.body.first_name;
  const middle_name = req.body.middle_name;
  const last_name = req.body.last_name;
  const age = parseInt(req.body.age, 10);
  const birth_date = req.body.birth_date;
  const gender = req.body.gender;
  const contact_number = parseInt(req.body.contact_number, 10);
  const created_at = new Date().toISOString();

  let stmt =
    "INSERT INTO `accounts_informations`(`account_id`, `first_name`, `middle_name`, `last_name`, `age`, `birth_date`, `gender`, `created_at`) VALUES ('" +
    account_id +
    "','" +
    first_name +
    "','" +
    middle_name +
    "','" +
    last_name +
    "','" +
    age +
    "','" +
    birth_date +
    "','" +
    gender +
    "','" +
    created_at +
    "')";
  connection.query(stmt, function (error, results, fields) {
    if (error) {
      res.status(401).json({
        error : error,
        data : null
      });
      return;
    }
    if (results[0] == undefined) {
      connection.query(stmt, function (error, results2, fields) {
        if (error) {
          res.status(401).json({
            error : error,
            data : null
          });
            return;
        }
        if (results2[0] == undefined) {
          res.status(401).json({
            error : error,
            data : null
          });
        } else {
            connection.query("SELECT * FROM `accounts_informations` WHERE `account_id`='" + account_id + "'", function (error, results, fields) {
                if (error) {
                  res.status(401).json({
                    error : error,
                    data : null
                  });
                    return;
                }
                if (results[0] == undefined) {
                  res.status(401).json({
                    error : error,
                    data : null
                  });
                } else {
                  res.status(401).json({
                    error : null,
                    data : results[0],
                    message : "Successfully created."
                  });
                }
            });
        }
    });
    }
  });
}

module.exports = { create }