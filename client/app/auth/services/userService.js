angular.module('Daas.auth.service', [])

.factory('Auth', function($http, $window, $interval){
  return {

    authLogin: function(url){
    $http({
      method: 'GET',
      url: url
    }).then(function(resp){
      console.log(resp);
    })

    },

    login: function(obj){
      $http({
        method: 'POST',
        url: '/api/local/login',
        data: obj
      }).then(function(resp){
        console.log(resp.data.token);
      })
    },
    register: function(obj){
      $http({
        method: 'POST',
        url: '/api/local/register',
        data: obj
      }).then(function(resp){
        console.log(resp.data.token);
      })
    },
    logout: function(obj, cb){
      $http({
        method: 'POST',
        url: '',
        data: obj
      }).then(function(resp){
        cb();
      })
    }
  }
});
