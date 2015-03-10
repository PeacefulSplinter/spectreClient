angular.module('Daas', [
  'ui.router',
  'ngFx',
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
  $mdThemingProvider.alwaysWatchTheme(true);
  $mdThemingProvider.theme('default')
    .primaryPalette('purple', {
      'default': '600'
    })
    .accentPalette('orange', {
      'default': '700'
    });
  $mdThemingProvider.theme('seti')
    .primaryPalette('indigo', {
      'default': '600'
    })
    .accentPalette('pink', {
      'default': '700'
    });
    $mdThemingProvider.theme('monokai')
    .primaryPalette('yellow', {
      'default': '600'
    })
    .accentPalette('teal', {
      'default': '700'
    });
    $mdThemingProvider.theme('luah')
    .primaryPalette('red', {
      'default': '600'
    })
    .accentPalette('blue-grey', {
      'default': '700'
    });
    $mdThemingProvider.theme('isotope')
    .primaryPalette('amber', {
      'default': '600'
    })
    .accentPalette('grey', {
      'default': '700'
    });
  $stateProvider
    .state('app',{
      url: '',
      abstract: true,
      template: '<ui-view />'
    })
})
.run(function($rootScope){
  $rootScope.appTheme = {
    active: 'default'
  };
})
.constant('Themes', {
  names: ['default', 'seti', 'monokai', 'luah', 'isotope']
})
