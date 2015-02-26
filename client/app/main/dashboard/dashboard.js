angular.module('Daas.main.dashboard', [
  'Daas.main.dashboard.settings',
  'Daas.main.dashboard.profile',
  'Daas.main.dashboard.dashboards'
  ])

.config(function($stateProvider){
  $stateProvider
    .state('app.main.dashboard', {
      url: '/dashboard',
      templateUrl: 'main/dashboard/dashboard.html',
      controller: 'DashboardController',
      auth: true
    })
    .state('app.main.dashboard.dashboards', {
      url: '',
      templateUrl: 'main/dashboard/dashboards/dashboards.html',
      controller: 'DashboardsController'
    })
    .state('app.main.dashboard.settings', {
      url: '',
      templateUrl: 'main/dashboard/settings/settings.html',
      controller: 'SettingsController'
    })
    .state('app.main.dashboard.profile', {
      url: '',
      templateUrl: 'main/dashboard/profile/profile.html',
      controller: 'ProfileController'
    })
})
.controller('DashboardController', function($scope, $state, $http, $modal, Auth){

  $scope.items = ['yeah', 'yup', 'ye'];
  $scope.integrate = function(){
    modalInstance = $modal.open({
    templateUrl: 'main/dashboard/integrations/integrations.html',
    controller: 'DashboardController',
    size: 'sm'
  });

 };

  $scope.ok = function () {
    modalInstance.close();
  };
});
