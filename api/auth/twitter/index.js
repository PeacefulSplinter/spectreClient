var express = require('express');
var passport = require('passport');
var router = express.Router();
var decode = require('../authService').decode;
var jwt = require('jsonwebtoken');

router.get('/twitter', passport.authenticate('twitter'));

router.get('/twitter/callback', passport.authenticate('twitter', {session: false}), function (req, res) {

  var token = jwt.sign(req.user, $config.JWT_SECRET, {expiresInMinutes: 60*5});
  var cwd = process.cwd();
  var testFile = cwd + '/api/views/test.html';

  res.cookie('twitterToken', token);
  res.sendFile(testFile);

});

module.exports = router;

