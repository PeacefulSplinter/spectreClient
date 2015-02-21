module.exports = {
  mongo: {
    url: process.env.MONGOLAB_URI
  },
  productionURL: process.env.PRODUCTION_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  twitter: {
    clientID: process.env.TWITTER_ID,
    clientSecret: process.env.TWITTER_SECRET
  },
  google: {
    clientID: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET
  },
  facebook: {
    clientID: process.env.FACEBOOK_ID,
    clientSecret: process.env.FACEBOOK_SECRET,
    callbackUrl: process.env.FACEBOOK_URL
  },
  mailchimp: {
    clientID: process.env.MAILCHIMP_ID,
    clientSecret: process.env.MAILCHIMP_SECRET
  },
  twitch: {
    clientID: process.env.TWITCH_ID,
    clientSecret: process.env.TWITCH_SECRET
  }
};
