angular.module('Daas.main.dashboard', [
  'Daas.main.dashboard.settings',
  'Daas.main.dashboard.profile',
  'Daas.main.dashboard.dashboards',
  'Daas.main.dashboard.graphs',
  'Daas.main.dashboard.dashboardCreator'
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
    .state('app.main.dashboard.dashboardCreator', {
      url: '',
      templateUrl: 'main/dashboard/dashboardCreator/dashboardCreator.html',
      controller: 'CreatorController'
    })
})
.controller('DashboardController', function($scope, $state, $http, Auth, $mdSidenav, $log){

  $scope.toggleLeft = function() {

    $mdSidenav('left').toggle().then(function(){
      $log.debug("toggle RIGHT is done");
    });
  };

 //  $scope.items = ['yeah', 'yup', 'ye'];
 //  $scope.integrate = function(){
 //    modalInstance = $modal.open({
 //    templateUrl: 'main/dashboard/integrations/integrations.html',
 //    controller: 'DashboardController',
 //    size: 'sm'
 //  });
 // };

 // $scope.dataPopUp = function(){
 //  modalInstance = $modal.open({
 //    templateUrl: 'main/dashboard/graphs/graphs.html',
 //    controller: 'GraphsController',
 //    size: 'lg'
 //  });
 // };

 //  $scope.ok = function () {
 //    modalInstance.close();
 //  };
});
