var express = require('express');
var router = express.Router();
var AccountService = require("../services/accountService");
var auth = require("./auth");

router.post('/login', AccountService.login);
router.post('/register', AccountService.register);
router.post("/verifyLogin", AccountService.verifyLogin);

module.exports = router;