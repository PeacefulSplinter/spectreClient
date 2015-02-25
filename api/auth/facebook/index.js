var express = require('express');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var router = express.Router();

router.get('/facebook', passport.authenticate('facebook'));

router.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/auth/fb/facebook/facebookFailure' , session: false}), function (req, res){

  var cwd = process.cwd();
  var testFile = cwd + '/api/views/test.html';
  var token = jwt.sign( { req.user.username } , 'cookie');
  res.cookie('Token', JSON.stringify({ token: token }));
  res.sendFile(testFile);

});

router.get('/facebook/facebookFailure', function (req, res){
  var cwd = process.cwd();
  var testFile = cwd + '/api/views/test.html';
  res.sendFile(testFile);
});

module.exports = router;
