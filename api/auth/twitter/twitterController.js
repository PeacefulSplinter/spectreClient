var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;
var User = require('../../user/userModel.js');

exports.setup = function (User){
  passport.use(new TwitterStrategy({
      consumerKey: $config.twitter.clientID,
      consumerSecret: $config.twitter.clientSecret,
      callbackURL: $config.twitter.callbackUrl
    },
    
    function(accessToken, refreshToken, profile, done) {
      User.findOne({'username': profile.id }, function(err, user){
        if (err) return done(err);
        if (!user) {
          var newUser = new User({'username': profile.id, 'displayName': profile.displayName,'grants.twitter': accessToken });
          newUser.save(function(err, user){
            if (err) { return done(err); }
            done(null, user);
          });
        }
        if (user){
          User.findOneAndUpdate({'username': profile.id}, {'grants.twitter': accessToken}, function(err, user){
            if(err) { return done(err); }
            done(null, user);
          }); 
        };
      });
    }
  ));
}
