angular.module('Daas.auth.service', [])

.factory('Auth', function($http, $window, $interval){
  return {

    authLogin: function(url){
      var windowFeatures = 'location=0,status=0,modal=yes,alwaysRaised=yes,width=800,height=600';
      var windowObjectReference = $window.open(url, 'AuthWindow', windowFeatures);
      var closed = $interval(function(){
        if(windowObjectReference.closed){
          console.log('closed');
        $interval.cancel(closed);
        }
      }, 500);
    },

    login: function(obj){
      $http({
        method: 'POST',
        url: '/auth/local/login',
        data: obj
      }).then(function(resp){
        console.log(resp.data.token);
      })
    },
    register: function(obj){
      $http({
        method: 'POST',
        url: '/auth/local/register',
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
