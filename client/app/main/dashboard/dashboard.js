angular.module('Daas.main.dashboard', [
  'Daas.main.dashboard.settings'
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
      template: '<div>yooooooo I am here</div>'
    })
    .state('app.main.dashboard.settings', {
      url: '',
      templateUrl: 'main/dashboard/settings/settings.html',
      controller: 'SettingsController'
    })
    .state('app.main.dashboard.profile', {
      url: '',
      template: '<div>yoooo I am the profile</div>'
    })
    .state('app.main.dashboard.integrations', {
      url: '',
      templateUrl: 'main/dashboard/integrations/integrations.html',
      controller: 'IntegrationsController'
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
