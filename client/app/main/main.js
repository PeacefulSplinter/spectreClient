angular.module('Daas.main', [
  'Daas.main.home',
  'Daas.main.dashboard'
])
.config(function($stateProvider){
  $stateProvider
    .state('app.main', {
      url: '',
      template: '<ui-view />',
      // controller: 'HomeController'
      abstract: true
  });

});
