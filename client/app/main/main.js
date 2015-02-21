angular.module('Daas.main', [
  'Daas.main.home',
  'Daas.main.dashboardDirective'
  ])

.config(function($stateProvider, $urlRouterProvider){

  // $stateProvider
  // .state('home', {
  //   url: '/',
  //   templateUrl: 'main/home/home.html',
  //   controller: 'HomeController'
  // })
  // .state('examples', {
  //   url: '/examples',
  //   templateUrl: 'main/example/example.html'
  // })
  // .state('dashboardCreator', {
  //   url: '/dashCreator',
  //   templateUrl: 'main/dashboardCreator/dash-template.html'
  // });
  // $urlRouterProvider.otherwise('/');
})
