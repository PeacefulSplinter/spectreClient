var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;
var User = require('../../user/userModel.js');

exports.setup = function (User){
  passport.use(new TwitterStrategy({
      consumerKey: '9DeclDeLrJfyLLKOx4ZABdio7',
      consumerSecret: 'To0KrrwMy06meHYYIm0O1Md5fF2N0qpPPJt1zUOvGdrtO46q9U',
      callbackURL: 'http://127.0.0.1:3000/auth/tw/twitter/callback'

      // consumerKey: $config.twitter.clientID,
      // consumerSecret: $config.twitter.clientSecret,
      // callbackURL: $config.twitter.callbackUrl
    },
    
    function(token, tokenSecret, profile, done) {
      var twitterTokens = {token: token, tokenSecret: tokenSecret};
      console.log(token, tokenSecret, twitterTokens);
      done(null, twitterTokens);


      // console.log('makes it to token');
      // User.findOne({'username': profile.id }, function(err, user){
        // if (err) return done(err);
        // if (!user) {
        //   var newUser = new User({'username': profile.id, 'displayName': profile.displayName,'grants.twitterToken': token, 'grants.twitterTokenSecret': tokenSecret });
        //   newUser.save(function(err, user){
        //     if (err) { return done(err); }
        //     done(null, user);
        //   });
        // }
        // if (user){
        //   User.findOneAndUpdate({'username': profile.id}, {'grants.twitterToken': token, 'grants.twitterTokenSecret': tokenSecret}, function(err, user){
        //     if(err) { return done(err); }
        //     done(null, user);
        //   }); 
        // };
      }
  ));
}
