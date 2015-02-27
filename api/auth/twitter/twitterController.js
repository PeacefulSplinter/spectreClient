var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;
var User = require('../../user/userModel.js');

exports.setup = function (User){
  passport.use(new TwitterStrategy({
      consumerKey: $config.twitter.clientID,
      consumerSecret: $config.twitter.clientSecret,
      callbackURL: $config.twitter.callbackUrl
    },
    
    function(token, tokenSecret, profile, done) {
      User.findOne({'username': profile.id }, function(err, user){
        if (err) return done(err);
        if (!user) {
          var newUser = new User({'username': profile.id, 'displayName': profile.displayName,'grants.twitterToken': token, 'grants.twitterTokenSecret': tokenSecret });
          newUser.save(function(err, user){
            if (err) { return done(err); }
            done(null, user);
          });
        }
        if (user){
          User.findOneAndUpdate({'username': profile.id}, {'grants.twitterToken': token, 'grants.twitterTokenSecret': tokenSecret}, function(err, user){
            if(err) { return done(err); }
            done(null, user);
          }); 
        };
      });
    }
  ));
}
