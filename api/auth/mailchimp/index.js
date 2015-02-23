var express = require('express');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var router = express.Router();

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findOne(id, function (err, user) {
    done(err, user);
  });
});

router.get('/mailchimp', passport.authenticate('mailchimp'));

router.get('/mailchimp/callback', passport.authenticate('mailchimp'), function (req, res) {
  var cwd = process.cwd();
  var testFile = cwd + '/api/views/test.html';
  var token = jwt.sign({foo:'foobar'}, $config.JWT_SECRET, {expiresInMinutes: 60*5});
  res.cookie('Token', token);
  res.sendFile(testFile);
  
});

module.exports = router;

