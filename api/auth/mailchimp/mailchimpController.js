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
      //console.log(req.user);

      req.user.provider.mailchimp.id = profile.id;
      req.user.provider.mailchimp.token = accessToken;

      req.user.save(function(err, saved){
        if (err){
          return done(err);
        }

        done(null, saved)
      });
      // decode token to find name, use name to find user
      // User.findOne({'providers.mailchimp.id': profile.id }, function(err, user){
      //   if (err) return done(err);
      //   if (!user) {
      //     var newUser = new User({'username': profile.id, 'providers.mailchimp.id': profile.id, 'providers.mailchimp.token': accessToken});
      //     newUser.save(function(err, user){
      //       if (err) { return done(err); }
      //       done(null, profile);
      //     });
      //   }
      //   if (user){
      //     User.findOneAndUpdate({'providers.mailchimp.id': profile.id}, {'providers.mailchimp.token': accessToken}, function(err, user){
      //       if(err) { return done(err); }
      //       done(null, profile);
      //     });
      //   }
      // });
    }
  ));
}
