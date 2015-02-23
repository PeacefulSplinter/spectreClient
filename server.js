process.env.NODE_ENV = process.env.NODE_ENV || 'development';
global._ = require('lodash');
global.$config = require('./config/main');

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

mongoose.connect($config.mongo.url);
require('./api')(app);

app.listen($config.port, function(){
  console.log("Listening on " + $config.port);
});

exports = module.exports = app;
