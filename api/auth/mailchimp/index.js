var express = require('express');
var passport = require('passport');
var router = express.Router();
var decode = require('../authService').decode;

router.get('/mailchimp', /* decode() ,*/ passport.authenticate('mailchimp', { session: false }));

router.get('/mailchimp/callback', passport.authenticate('mailchimp', { session: false}), function (req, res) {
  var cwd = process.cwd();
  var testFile = cwd + '/api/views/test.html';
  res.sendFile(testFile);
});

module.exports = router;

