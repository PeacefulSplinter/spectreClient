var express = require('express');
var passport = require('passport');
var router = express.Router();
var decode = require('../authService').decode;
var jwt = require('jsonwebtoken');

router.get('/twitter', passport.authenticate('twitter'));

router.get('/twitter/callback', passport.authenticate('twitter', {session: false}), function (req, res) {
  //console.log(req.twitterTokens);
  var token = jwt.sign(req.user, $config.JWT_SECRET, {expiresInMinutes: 60*5});
  res.cookie('Twitter Token', token);

  var cwd = process.cwd();
  var testFile = cwd + '/api/views/test.html';
  res.sendFile(testFile);

});

module.exports = router;
