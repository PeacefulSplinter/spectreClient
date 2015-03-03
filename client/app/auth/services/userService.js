angular.module('Daas.auth.service', ['ngCookies'])

.factory('Auth', function($http, $window, $interval, $cookies, $rootScope, $state){
  var checkCookie = function(){
    if($cookies.Token){
      return true
    } else{
      return false;
    }
  };

  return {
    checkCookie: checkCookie,
    authLogin: function(provider){
      var urlMap = {
        'fb': '/auth/fb/facebook',
        'facebook': '/auth/fb/facebook',
        'g': '/auth/g/google',
        'google': '/auth/g/google',
        'mc': '/api/v1/mailchimp/mailchimpcall',
        'tw': '/auth/tw/twitter'
      };


      var url = urlMap[provider];
      if(!url)return;
      var windowFeatures = 'location=0,status=0,modal=yes,alwaysRaised=yes,width=800,height=600';
      var windowObjectReference = $window.open(url, 'AuthWindow', windowFeatures);
      var interval;
      $rootScope.cookieStatus = false;
      var closed = function(){
        interval = $interval(function(){

          if(windowObjectReference.closed){
            if (checkCookie()){
              console.log('All good');
              $state.go('app.main.dashboards');
            } else {
              $rootScope.cookieStatus = true;
            }
            $interval.cancel(interval);
          }

        }, 500);
      };

      closed();

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

