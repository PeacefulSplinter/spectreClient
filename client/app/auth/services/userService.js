angular.module('Daas.auth.service', ['ngCookies'])

.factory('Auth', function($http, $window, $interval, $cookieStore, $rootScope, $state){

  return {

    checkCookie: function(evt, toState){
      var cookie;
      try{
        cookie = $cookieStore.get('Token');
      }catch(err){
        console.error(err);
      }

      if(cookie && toState.auth){
        evt.preventDefault();
        $state.go('app.main.dashboard');
      }
    },
    authLogin: function(provider){
      var urlMap = {
        'fb': '/auth/fb/facebook',
        'facebook': '/auth/fb/facebook',
        'g': '/auth/g/google',
        'google': '/auth/g/google'
      };

      var url = urlMap[provider];
      if(!url)return;
      var windowFeatures = 'location=0,status=0,modal=yes,alwaysRaised=yes,width=800,height=600';
      var windowObjectReference = $window.open(url, 'AuthWindow', windowFeatures);
      var interval;
      var closed = function(){
        interval = $interval(function(){

          if(windowObjectReference.closed){
            this.checkCookie();
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
