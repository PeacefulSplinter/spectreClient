angular.module('Daas', [
  'ui.router',
  'Daas.auth.service',
  'Daas.auth',
  'Daas.main',
  'ngMessages'
  ])

.config(function($stateProvider, $urlRouterProvider){
  // $stateProvider
  //   .state('home', {
  //   url: '/',
  //   templateUrl: 'main/home/home.html',
  //   controller: 'HomeController'
  // })
  // .state('examples', {
  //   url: '/examples',
  //   templateUrl: 'main/example/example.html'
  // })
  // .state('login', {
  //   url: '/login',
  //   templateUrl: 'auth/login/login.html',
  //   controller: 'LoginController'
  // })
  // .state('signup', {
  //   url: '/signup',
  //   templateUrl: 'auth/signup/signup.html',
  //   controller: 'SignupController'
  // })
  // .state('dashboardCreator', {
  //   url: '/dashCreator',
  //   templateUrl: 'main/dashboardCreator/dash-template.html'
  // });
  $urlRouterProvider.otherwise('/dashboard');
  $stateProvider
    .state('app',{
      url: '',
      abstract: true,
      template: '<ui-view />'
    })
});
