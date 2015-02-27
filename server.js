process.env.NODE_ENV = process.env.NODE_ENV || 'development';
global._ = require('lodash');
global.$config = require('./config/main');

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var request = require('request');
var morgan = require('morgan');
var app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static('client/app'))

mongoose.connect($config.mongo.url);
require('./api')(app);

app.listen($config.port, function(){
  console.log("Listening on port " + $config.port);
});

exports = module.exports = app;
