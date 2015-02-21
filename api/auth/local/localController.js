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
  var newUser = new User(req.body);
  newUser.save(function(err, user){
    if(err) return res.status(401).json('Registration Error: ' + err);
    var token = jwt.sign({_id: user._id}, $config.JWT_SECRET, {expiresInMinutes: 60*5});
    res.status(200).send({token: token});
  });
};

exports.login = function(req, res, next){
  var newUser = new User(req.body);

  User.findOne({username: newUser.username}, function(err, user){
    if (err) return done(err);
    if(!user) {
      return res.status(401).send({message: 'Username does not exist'});
    }
    user.comparePassword(newUser.password, function(err, isMatch){
      if(err) return res.status(401).json('Login Error: ' + err);
      var token = jwt.sign({_id: user._id}, $config.JWT_SECRET, {expiresInMinutes: 60*5});
      res.status(201).send({token: token});
    });
  });
};