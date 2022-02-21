var express = require('express');
var app = express();
var account = require("./accountRouter");

app.use("/account", account);

module.exports = app;