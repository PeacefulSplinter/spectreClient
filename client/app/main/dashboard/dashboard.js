angular.module('Daas.main.dashboard', [])

.config(function($stateProvider){
  $stateProvider
    .state('app.main.dashboard', {
      url: '/dashboard',
      templateUrl: 'main/dashboard/dashboard.html',
      controller: 'DashboardController'
    });
})
.controller('DashboardController', function($scope, $state, $http){

  console.log('controller')
});
