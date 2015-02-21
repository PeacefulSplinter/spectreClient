angular.module('Daas.auth',[
  'Daas.auth.login',
  'Daas.auth.signup',
  'Daas.auth.service'
  ])


.config(function($stateProvider, $urlRouterProvider){

  // $stateProvider
  //   .state('login', {
  //     url: 'auth/login',
  //     templateUrl: 'auth/login/login.html',
  //     controller: 'LoginController'
  //   })
  //   .state('signup', {
  //     url: 'auth/signup',
  //     templateUrl: 'auth/signup/signup.html',
  //     controller: 'SignupController'
  //   })
  //   $urlRouterProvider.otherwise('auth/login');
})
