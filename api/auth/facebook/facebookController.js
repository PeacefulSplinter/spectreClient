var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

exports.setup = function (User){
  passport.use(new FacebookStrategy({
      clientID: $config.facebook.clientID,
      clientSecret: $config.facebook.clientSecret,
      callbackURL: $config.facebook.callbackUrl
    },
    function(accessToken, refreshToken, profile, done) {
      User.findOne({'username': profile.id }, function(err, user){
        if (err) return done(err);
        if (!user) {
          var newUser = new User({'username': profile.id, 'displayName': profile.displayName,'grants.facebookToken': accessToken });
          newUser.save(function(err, user){
            if (err) { return done(err); }
            done(null, user);
          });
        }
        if (user){
          User.findOneAndUpdate({'username': profile.id}, {'grants.facebookToken': accessToken}, function(err, user){
            if(err) { return done(err); }
            done(null, user);
          });
        };
      });
    }
  ));
}

