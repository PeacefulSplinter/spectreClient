// var express = require('express');
// var router = express.Router();
// router.use('/user', require('./user'));

module.exports = function(app){
  //create app.use per new routes
  //will find index.js by default
 
  app.use('/auth', require('./auth'));
  app.use('/user', require('./user'));

};
