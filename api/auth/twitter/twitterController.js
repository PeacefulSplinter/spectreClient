var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;

exports.setup = function (User){
  passport.use(new TwitterStrategy({
      consumerKey: $config.twitter.clientID,
      consumerSecret: $config.twitter.clientSecret,
      callbackURL: $config.twitter.callbackUrl,
      passReqToCallback: true
    },
    
    function(req, token, tokenSecret, profile, done) {
      // //find user with id
      // req.user.provider.twitter.id = profile.id;
      // req.user.provider.twitter.token = accessToken;
      
      // //save accessToken
      // req.user.save(function(err, saved){
      //   if (err){
      //     return done(err);
      //   }
      //   res.send('hey');
      //   done(null, profile);
        
      // });
      // console.log(accessToken, profile);
      // console.log('hey');
      done(null, profile);

    }));
}
