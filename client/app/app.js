angular.module('Daas', [
  'ui.router',
  'ui.bootstrap',
  'Daas.auth.service',
  'Daas.auth',
  'Daas.main',
  'ngMessages'
  ])

.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('app',{
      url: '',
      abstract: true,
      template: '<ui-view />'
    })
})
.run(function(Auth, $state, $rootScope){
  $rootScope.$on('$stateChangeStart', function(evt, toState, toStateParams, fromState){
    Auth.checkCookie(evt, toState);
  })
})
