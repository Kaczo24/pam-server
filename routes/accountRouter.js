var express = require('express');
var router = express.Router();
var AccountService = require("../services/accountService");

router.post('/login', AccountService.login);
router.post('/register', AccountService.register);

module.exports = router;