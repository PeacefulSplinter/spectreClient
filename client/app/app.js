angular.module('Daas', [
  'ui.router',
  'ngMaterial',
  'Daas.auth.service',
  'Daas.auth',
  'Daas.main',
  'Daas.main.dashboards'
  ])

.config(function($stateProvider, $urlRouterProvider, $mdThemingProvider){
  $mdThemingProvider.theme('default')
    .primaryPalette('purple', {
      'default': '600'
    })
    .accentPalette('orange', {
      'default': '700'
    });

  // $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('app',{
      url: '',
      abstract: true,
      template: '<ui-view />'
    })
})
// .run(function(Auth, $state, $rootScope){
//   $rootScope.$on('$stateChangeStart', function(evt, toState, toStateParams, fromState){
//     Auth.checkCookie(evt, toState);
//   })
// })
