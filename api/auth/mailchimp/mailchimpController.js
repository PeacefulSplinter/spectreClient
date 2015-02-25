var passport = require('passport');
var MailChimpStrategy = require('passport-mailchimp').Strategy;

exports.setup = function (User){
  passport.use(new MailChimpStrategy({
      clientID: $config.mailchimp.clientID,
      clientSecret: $config.mailchimp.clientSecret,
      callbackURL: $config.mailchimp.callbackUrl,
      passReqToCallback: true
    },
    function(req, accessToken, refreshToken, profile, done) {

      req.user.provider.mailchimp.id = profile.id;
      req.user.provider.mailchimp.token = accessToken;

      req.user.save(function(err, saved){
        if (err){
          return done(err);
        }

        done(null, saved)
      });
      done(null, profile);
    }
  ));
}
