angular.module('Daas', [
  'ui.router',
  'ngMaterial',
  'ngMdIcons',
  'Daas.auth',
  'Daas.main',
  'uuid',
  'Daas.auth.service',
  'Daas.main.dashboards',
  'Daas.main.dashboards.apiService',
  'Daas.main.dashboards.dashboardService'
])

.config(function($stateProvider, $urlRouterProvider, $mdThemingProvider, $locationProvider){
  $mdThemingProvider.theme('default')
    .primaryPalette('purple', {
      'default': '600'
    })
    .accentPalette('orange', {
      'default': '700'
    });
  $stateProvider
    .state('app',{
      url: '',
      abstract: true,
      template: '<ui-view />'
    })
})

