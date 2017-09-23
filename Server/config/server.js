var express = require('express');
var consign = require('consign');
var bodyPaser = require('body-parser');

var app = express();

app.use(bodyPaser.urlencoded({extended: true}));

consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .into(app);

module.exports = app;
