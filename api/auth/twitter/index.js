var express = require('express');
var passport = require('passport');
var router = express.Router();
var decode = require('../authService').decode;

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findOne(id, function (err, user) {
    done(err, user);
  });
});

router.get('/twitter', decode(), passport.authenticate('twitter'));

router.get('/twitter/callback', passport.authenticate('twitter'), function (req, res) {
  console.log(req.account);
  var cwd = process.cwd();
  var testFile = cwd + '/api/views/test.html';
  res.send(testFile);

  // var cwd = process.cwd();
  // var testFile = cwd + '/api/views/test.html';
  // var token = jwt.sign({foo:'foobar'}, 'spectreswagyolosauceboss101', {expiresInMinutes: 60*5});
  // res.cookie('Token', token);
  // res.sendFile(testFile);
  //console.log(res);
  //   //var token = jwt.sign({foo:'foobar'}, $config.JWT_SECRET, {expiresInMinutes: 60*5});
     //res.status(200).json({token: token}).end();
  //   res.status(200).end();
  // });
  //});
});

//router.get('/', )

module.exports = router;