angular.module('Daas.main.dashboards.mydashboard', [])

.config(function($stateProvider){
  $stateProvider
    .state('app.main.dashboards.mydashboard', {
      url: '/mydashboard',
      templateUrl: 'main/dashboard/dashboard.html',
      controller: 'MyDashboardController'
    })
})

.controller('MyDashboardController', function($scope, $state, $http, Auth, $mdSidenav, $log, $mdDialog){

});
