angular.module('Daas.main.dashboards.dashboardCreator', [])

.config(function($stateProvider){
  $stateProvider
    .state('app.main.dashboards.dashboardCreator', {
      url: '/dashboardcreator',
      templateUrl: 'main/dashboards/dashboardCreator/dashboardCreator.html'
    });
})

.controller('CreatorController', function($scope, $rootScope, $timeout){
  var data = [['2009', 55],['2011', 20],['2012', 39],['2013', 60],['2014', 38]];

  $scope.save = function(){
    var children = angular.element(document.getElementById('chartsdisplay')).children();
    for(var i=0; i< children.length; i++){
      children[i] = JSON.stringify(children[i]);
    }
    console.log('being saved', children);
    // var kids = JSON.stringify(children);
    // console.log('being saved', kids);
  };


});
