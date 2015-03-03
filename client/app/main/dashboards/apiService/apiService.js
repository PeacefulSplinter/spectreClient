angular.module('Daas.main.dashboards.apiService', ['ngCookies'])

.factory('GetData', function($http, $cookies){

  return{
    twitterapi: function(){
      $http({
        method: 'POST',
        url: 'http://spectre-api.herokuapp.com/api/v1/api/twitter/twitterFollowers',
        data: {token: $cookies.Token}
      }).then(function(resp){
        console.log('I am the response', resp.data.followDate);
        var tData = resp.data.followDate;
        var obj = {};
        for(var i=0; i<tData.length; i++){
          var year = tData[i].slice(tData[i].length -4);
          if(obj[year]){
            obj[year]++;
          }else{
            obj[year] = 1;
          }
        }
        console.log(obj);
        return obj;
      })
    },
    mailchimapi: function(){
      $http({
        method: 'POST',
        url: 'http://spectre-api.herokuapp.com/api/v1/api/mailchimp/mailchimpSub',
        data: {ye: 'ye'}
      }).then(function(resp){
        console.log(resp);
      })
    }
  }
});
