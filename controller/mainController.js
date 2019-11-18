const modules = {
    createAccount: require('../controller/accounts/create'),
}

let createAccount = (req, res) => {
    modules.createAccount.createAccount(req, res);
}


module.exports = { createAccount }