var local;
try {
  local = require('./local');
} catch(error){
	console.log('error from ' + __dirname + '/development.js: ', error);
}

for(var key in local){
  process.env[key] = local[key];
}

module.exports = {
  mongo: {
    url: 'mongodb://127.0.0.1/peacefulSplinter'
  },
  productionURL: process.env.PRODUCTION_URL,
  JWT_SECRET: 'process.env.JWT_SECRET',
  twitter: {
    clientID: process.env.TWITTER_ID,
    clientSecret: process.env.TWITTER_SECRET,
    callbackUrl: 'http://127.0.0.1:3000/auth/tw/twitter/callback'
  },
  google: {
    clientID: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackUrl: 'http://localhost:3000/auth/g/google/callback'
  },
  facebook: {
    clientID: process.env.FACEBOOK_ID,
    clientSecret: process.env.FACEBOOK_SECRET,
    callbackUrl: 'http://localhost:3000/auth/fb/facebook/callback'
  },
  mailchimp: {
    clientID: process.env.MAILCHIMP_ID,
    clientSecret: process.env.MAILCHIMP_SECRET,
    callbackUrl: 'http://127.0.0.1:3000/auth/mc/mailchimp/callback'
  }
};
