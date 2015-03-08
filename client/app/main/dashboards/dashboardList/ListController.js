angular.module('Daas.main.dashboards.list', [])

.controller('ListController', function($state, $scope, $rootScope, DashboardLoad){
  DashboardLoad.loadDash().then(function(resp){
    $scope.name = resp.data.displayName || resp.data.username.charAt(0).toUpperCase() + resp.data.username.slice(1);
    $scope.dashboards = resp.data.savedDashboards;
    $scope.lastSaved = resp.data.lastSaved;
    $scope.comment = resp.data.comments;
  });

  $scope.loadDash = function(id){
    DashboardLoad.loadOneDash(id)
    .then(function(resp){
      $rootScope.myDashBoard = resp.data;
      $state.transitionTo('app.main.dashboards.mydashboard', resp.data);
    });
  }
});
