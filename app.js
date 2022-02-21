var express = require('express');
require('dotenv').config()
var path = require('path');
var cookieParser = require('cookie-parser');
var cors = require("cors");
var bodyParser = require("body-parser")
var app = express();
const mainRouter = require("./routes/router")

app.use(cors());
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.use('/api', mainRouter)

module.exports = app;
