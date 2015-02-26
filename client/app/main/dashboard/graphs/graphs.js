angular.module('Daas.main.dashboard.graphs', [])

.controller('GraphsController', function($rootScope, $scope, GetData){
  // $rootScope.intergrations = [
  // {name: 'Twitter',
  //   endPoints: {
  //     follows: 'Number of followers',
  //     dates: 'Dates of user follows',
  //     location: 'Location of followers'
  //     }
  //   }
  // ];

  $scope.ok = function () {
    // GetData.twitterapi();
    $rootScope.twitterData = {data : [['2009', 30],['2011', 50],['2012', 100],['2013', 150],['2014', 1932]]};
    $rootScope.twitterData.userSelection = $scope.checkboxModel;
    modalInstance.close();
  };

  $scope.checkboxModel = {
    pie: false,
    line: false,
    bar: false
  };

})

.factory('GetData', function($http){

  return{
    twitterapi: function(){
      $http({
        method: 'GET',
        url: 'http://spectre-api.herokuapp.com/api/v1/api/twitter/twitterFollowers'
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
        var arr = [['2009', 30],['2011', 50],['2012', 100],['2013', 150],['2014', 1932]];
        return arr;
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
