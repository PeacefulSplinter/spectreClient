angular.module('Daas.main.dashboard.dashboardCreator', [])

.controller('CreatorController', function($scope, $rootScope){
  var data = $rootScope.twitterData.data;
  var userSelection = $rootScope.twitterData.userSelection;

  var selection = {};

  for(var key in userSelection){
    if(userSelection[key] === true){
      selection[key] = key;
    }
  }

  var chart = c3.generate({
    bindto : '#chart',
    data : {
      columns : data,
      type: 'bar'
    }
  });
});
