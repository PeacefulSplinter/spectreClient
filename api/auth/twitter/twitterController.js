var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;

exports.setup = function (User){
  passport.use(new TwitterStrategy({
      consumerKey: $config.twitter.clientID,
      consumerSecret: $config.twitter.clientSecret,
      callbackURL: $config.twitter.callbackUrl
    },
    function(accessToken, refreshToken, profile, done) {
      User.findOne({'providers.twitter.token': accessToken }, function(err, user){
        if (err) return done(err);
        if (!user) {
          var newUserEntry = new User({'providers.twitter.token': accessToken}) 
          newUser.save(function(err, user){
            if (err) { 
                return done(err); 
            }
            done(null, profile);
          });
        }
      });
    }
  ));
}
