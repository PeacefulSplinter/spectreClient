var passport = require('passport');
var MailChimpStrategy = require('passport-mailchimp').OAuth2Strategy;

exports.setup = function (User){
  passport.use(new MailChimpStrategy({
      clientID: $config.mailchimp.clientID,
      clientSecret: $config.mailchimp.clientSecret,
      callbackURL: $config.mailchimp.callbackUrl
    },
    function(accessToken, refreshToken, profile, done) {
      User.findOne({'providers.mailchimp.id': profile.id }, function(err, user){
        if (err) return done(err);
        if (!user) {
          var newUser = new User({'username': profile.id, 'providers.mailchimp.id': profile.id, 'providers.mailchimp.token': accessToken});
          newUser.save(function(err, user){
            if (err) { return done(err); }
            done(null, profile);
          });
        }
        if (user){
          User.findOneAndUpdate({'providers.mailchimp.id': profile.id}, {'providers.mailchimp.token': accessToken}, function(err, user){
            if(err) { return done(err); }
            done(null, profile);
          });
        }
      });
    }
  ));
}
