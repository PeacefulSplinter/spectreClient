var User = require('../../user/userModel.js');
var bcrypt = require('bcrypt');
var passport = require('passport');
var jwt = require('jsonwebtoken');

// Possible metric chart
exports.index = function(req, res){
  User.find({}, '-password', function(err, users){
    if(err) return res.status(500).send(err);
    res.status(200).send(users);
  })
};

exports.register = function(req, res, next){

  var newUser = new User({username: req.body.username, password: req.body.password});

  newUser.save(function(err, user){
    if(err) return res.status(401).json('Registration Error: ' + err);
    var token = jwt.sign( req.body.username, $config.JWT_SECRET, {expiresInMinutes: 60*5});
    res.cookie('Token', token);
    res.status(200).send(); 
  });
};

exports.login = function(req, res, next){

  User.findOne({username: req.body.username}, function(err, user){
    if (err) return done(err);
    if(!user) {
      return res.status(401).send({message: 'Username does not exist'});
    }
    user.comparePassword(req.body.password, function(err, isMatch){
      if(err) return res.status(401).json('Login Error: ' + err);
      var token = jwt.sign( req.body.username, $config.JWT_SECRET, {expiresInMinutes: 60*5});
      res.cookie('Token', token);
      res.status(200).send();
    });
  });
};