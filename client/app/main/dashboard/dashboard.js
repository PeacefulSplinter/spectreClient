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
      url: '/dashboards',
      templateUrl: 'main/dashboard/dashboards/dashboards.html',
      controller: 'DashboardsController'
    })
    .state('app.main.dashboard.settings', {
      url: '/settings',
      templateUrl: 'main/dashboard/settings/settings.html',
      controller: 'SettingsController'
    })
    .state('app.main.dashboard.profile', {
      url: '/profile',
      templateUrl: 'main/dashboard/profile/profile.html',
      controller: 'ProfileController'
    })
    .state('app.main.dashboard.dashboardCreator', {
      url: '/dashboardCreate',
      templateUrl: 'main/dashboard/dashboardCreator/dashboardCreator.html',
      controller: 'CreatorController'
    })
})
.controller('DashboardController', function($scope, $state, $http, Auth, $mdSidenav, $log, $mdDialog){




  $scope.links = [
  {name: 'My Dashboards', link: 'app.main.dashboard.dashboards'},
  {name: 'Dashboard Creator', link: 'app.main.dashboard.dashboardCreator'}];


  $mdSidenav('left').toggle();

  $scope.toggleLeft = function() {
    $mdSidenav('left').toggle();
  };

  $scope.profile = function(e) {
    $mdDialog.show({
      contoller: function($scope, $mdDialog) {
        $scope.ok = function() {
          $mdDialog.hide();
        };
        $scope.cancel = function() {
          $mdDialog.cancel();
        };
      },
      templateUrl: 'main/dashboard/profile/profile.html',
      targetEvent: e
    });
  }

});
