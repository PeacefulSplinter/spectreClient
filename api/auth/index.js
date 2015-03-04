//create app.use per new routes
//will find index.js by default

var express = require('express');
var session = require('express-session');
var passport = require('passport');
var User = require('../user/userModel');
var router = express.Router();
router.use(passport.initialize());
router.use(session({secret: 'shhhhh', saveUninitialized: false, resave: false}));
// Passport Configuration
require('./facebook/facebookController').setup(User);
require('./google/googleController').setup(User);
require('./twitter/twitterController').setup(User);
require('./mailchimp/mailchimpController').setup(User);

router.use('/local', require('./local'));
router.use('/fb', require('./facebook'));
router.use('/g', require('./google'));
router.use('/tw', require('./twitter'));
router.use('/mc', require('./mailchimp'));

module.exports = router;
