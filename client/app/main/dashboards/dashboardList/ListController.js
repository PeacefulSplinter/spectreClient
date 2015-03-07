angular.module('Daas.main.dashboards.list', [])

.controller('ListController', function($state, $scope, $rootScope, DashboardLoad){
  $scope.loadDash = function(id){
    console.log('happened', id);
    DashboardLoad.loadOneDash(id)
    .then(function(resp){
      $rootScope.myDashBoard = resp;
      $state.transitionTo('app.main.dashboards.mydashboard', resp);
    });
  }
});
