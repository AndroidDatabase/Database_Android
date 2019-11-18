const express = require("express");
const routes = express.Router();
const mainController = require('../controller/mainController');

routes.route('/createAccount').post((req, res) => {
    console.log(req.body);    
    mainController.createAccount(req, res);    
})


module.exports = routes