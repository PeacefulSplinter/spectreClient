var express = require('express');
var passport = require('passport');
var router = express.Router();
var decode = require('../authService').decode;

// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });

// passport.deserializeUser(function(id, done) {
//   User.findOne(id, function (err, user) {
//     done(err, user);
//   });
// });

router.get('/mailchimp', decode(), passport.authenticate('mailchimp'));

router.get('/mailchimp/callback', passport.authenticate('mailchimp'), function (req, res) {
  console.log(req.account);
  var cwd = process.cwd();
  var testFile = cwd + '/api/views/test.html';
  res.sendFile(testFile);
});

router.get('/demo', decode(),function(req, res) {
	console.log(req.user)
	res.send(req.user._id)
});



module.exports = router;

