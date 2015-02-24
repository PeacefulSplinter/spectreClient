var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;

exports.setup = function (User){
  passport.use(new TwitterStrategy({
      consumerKey: $config.twitter.clientID,
      consumerSecret: $config.twitter.clientSecret,
      callbackURL: $config.twitter.callbackUrl,
      passReqToCallback: true
    },
    
    function(accessToken, refreshToken, profile, done) {

      // find user with id
      req.user.provider.twitter.id = profile.id;
      req.user.provider.twitter.token = accessToken;

      // save accessToken
      req.user.save(function(err, saved){
        if (err){
          return done(err);
        }

        done(null, saved)
      });
    }
  ));
}
