angular.module('Daas.main.dashboards.mydashboard', [])

.config(function($stateProvider){
  $stateProvider
    .state('app.main.dashboards.mydashboard', {
      url: '/mydashboard:id',
      templateUrl: 'main/dashboards/myDashboard/myDashboard.html',
      controller: 'MyDashboardController'
    })
})

.controller('MyDashboardController', function($scope, $stateParams, $mdSidenav, $mdDialog){
  console.log($stateParams);
});
