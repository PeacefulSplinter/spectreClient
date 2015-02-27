var express = require('express');
var passport = require('passport');
var router = express.Router();
var decode = require('../authService').decode;

router.get('/twitter', passport.authenticate('twitter'));


router.get('/twitter/callback', passport.authenticate('twitter', {session: false}), function (req, res) {
  var cwd = process.cwd();
  var testFile = cwd + '/api/views/test.html';
  res.sendFile(testFile);
});

module.exports = router;