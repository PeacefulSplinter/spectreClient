var compose = require('composable-middleware');
var expressJwt = require('express-jwt');
var User = require('../user/userModel');
var validateJwt = expressJwt({ secret: 'cookie'});

function isAuthenticated() {
  return compose()
    // Validate jwt
    .use(function(req, res, next) {
      // allow access_token to be passed through query parameter as well
      if(req.body && req.body.hasOwnProperty('token')) {
        console.log('we in here!');
        req.body.authorization = req.body.token;
      }
      validateJwt(req, res, next);
    })
    
    // Attach user to request
    .use(function(req, res, next) {
      var decodedValue = jwt.decode(req.body.authorization);
      User.findById(decodedValue, function (err, user) {
        if (err) return next(err);
        if (!user) {
          return res.status(401).send('Unauthorized');
        }
        console.log('successful decode');
        req.user = user;
        next();

      });
    });
};

module.exports = {
  decode: isAuthenticated
};