var compose = require('composable-middleware');
var expressJwt = require('express-jwt');
var User = require('../user/userModel');
var validateJwt = expressJwt({ secret: 'cookie'});

function isAuthenticated() {
  return compose()
    // Validate jwt
    .use(function(req, res, next) {
      // allow access_token to be passed through query parameter as well
      if(req.query && req.query.hasOwnProperty('access_token')) {
        console.log('we in here!');
        req.headers.authorization = 'Bearer ' + req.query.access_token;
      }
      validateJwt(req, res, next);
    })
    
    // Attach user to request
    .use(function(req, res, next) {
      User.findById(req.user.username, function (err, user) {
        if (err) return next(err);
        if (!user) {
          return res.status(401).send('Unauthorized');
        }

        req.user = user;
        next();

      });
    });
};

module.exports = {
  decode: isAuthenticated
};