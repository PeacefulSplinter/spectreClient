var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

exports.setup = function (User){
  passport.use(new GoogleStrategy({
      clientID: $config.google.clientID,
      clientSecret: $config.google.clientSecret,
      callbackURL: $config.google.callbackUrl
    },
    function(accessToken, refreshToken, profile, done) {
      User.findOne({'username': profile.id }, function(err, user){
        if (err) return done(err);
        if (!user) {
          var newUser = new User({'username': profile.id, 'displayName': profile.displayName,'grants.googleToken': accessToken });
          newUser.save(function(err, user){
            if (err) { return done(err); }
            done(null, user);
          });
        }
        if (user){
          User.findOneAndUpdate({'username': profile.id}, {'grants.googleToken': accessToken}, function(err, user){
            if(err) { return done(err); }
            done(null, user);
          });
        };
      });
    }
  ));
}
