var passport = require('passport');
var MailChimpStrategy = require('passport-mailchimp').Strategy;
var User = require('../../user/userModel.js');

exports.setup = function (User){
  passport.use(new MailChimpStrategy({
      clientID: $config.mailchimp.clientID,
      clientSecret: $config.mailchimp.clientSecret,
      callbackURL: $config.mailchimp.callbackUrl,
      passReqToCallback: true
    },
    function(req, accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  ));
}
