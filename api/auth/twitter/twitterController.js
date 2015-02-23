var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;

exports.setup = function(User, config) {

	passport.use(new TwitterStrategy({
	  consumerKey: $config.twitter.clientID,
	  consumerSecret: $config.twitter.clientSecret,
	  callbackURL: $config.twitter.callbackUrl
	},

	function(accessToken, tokenSecret, profile, done) { 
		  User.findOne({'providers.twitter.token': accessToken}, function(err, user){
		    if (err) return done(err);
		    if (!user) {
		      console.log('Not authorized with twitter yet!');
		      var newUser = new User({
		                'providers.twitter.token': accessToken
		      });

		      newUser.save(function(err, user){
		        if (err) { return done(err); }
		      });
		    }
			  done(null, profile);
		  });
	}
	));
}


