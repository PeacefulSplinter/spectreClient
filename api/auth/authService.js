var compose = require('composable-middleware');
var jwt = require('jsonwebtoken');
var User = require('../user/userModel');

function isAuthenticated() {
  return compose()
    // Validate jwt
    .use(function(req, res, next) {
      // allow access_token to be passed through query parameter as well
      if(req.body && req.body.hasOwnProperty('token')) {
        var decodedValue = jwt.decode(req.body.token);
        req.body.token = decodedValue;
        console.log('we in here!');
      }
      next();
    })
    
    // Attach user to request
    .use(function(req, res, next) {
      
      User.findOne({'username': req.body.token}, function (err, user) {
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

exports.decode = isAuthenticated;