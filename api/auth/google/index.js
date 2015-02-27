var express = require('express');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var router = express.Router();

router.get('/google', passport.authenticate('google', {scope: 'https://www.googleapis.com/auth/plus.login'}));

router.get('/google/callback', passport.authenticate('google', { session: false }), function (req, res) {
  var cwd = process.cwd();
  var testFile = cwd + '/api/views/test.html';
  var token = jwt.sign(req.user.username, $config.JWT_SECRET, {expiresInMinutes: 60*5});
  res.cookie('Token', token);
  res.sendFile(testFile);
});

module.exports = router;

