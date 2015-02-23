  //create app.use per new routes
  //will find index.js by default

  var express = require('express');
  var passport = require('passport');
  var User = require('../user/userModel');
  var router = express.Router();
  router.use(passport.initialize());

  // Passport Configuration
  require('./facebook/facebookController').setup(User);
  require('./google/googleController').setup(User);

  router.use('/local', require('./local'));
  router.use('/fb', require('./facebook'));
  router.use('/g', require('./google'));

  module.exports = router;

  