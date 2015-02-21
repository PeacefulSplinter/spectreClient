var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

exports.setup = function (User){
  passport.use(new FacebookStrategy({
      clientID: $config.facebook.clientID,
      clientSecret: $config.facebook.clientSecret,
      callbackURL: $config.facebook.callbackUrl
    },
    function(accessToken, refreshToken, profile, done) {
      User.findOne({'providers.facebookID': profile.id }, function(err, user){
        if (err) return done(err);
        if (!user) {
          var newUser = new User({'providers.facebookID': profile.id});
          newUser.save(function(err, user){
            console.log('save process started');
            if (err) { 
              console.log('save query error');
              return done(err); 
            }
            console.log('save query success!');
            done(null, profile);
          });
        }
        if (user){
            console.log('user in database already');
            done(null, profile);    
          };
        }
      );
    }
  ));
}

