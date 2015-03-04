var express = require('express');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var router = express.Router();

router.get('/facebook', passport.authenticate('facebook'));

router.get('/facebook/callback', passport.authenticate('facebook', {session: false}), function (req, res){
  var cwd = process.cwd();
  var testFile = cwd + '/api/views/test.html';
  var token = jwt.sign(req.user.username, $config.JWT_SECRET, {expiresInMinutes: 60*5});
  console.log(token);
  res.cookie('Token', token);
  res.sendFile(testFile);
});

module.exports = router;