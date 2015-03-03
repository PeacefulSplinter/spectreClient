angular.module('Daas.auth',[
  'Daas.auth.login',
  'Daas.auth.signup',
  'Daas.auth.service'
  ])


.config(function($stateProvider){

  $stateProvider
    .state('app.login', {
      url: '/login',
      templateUrl: 'auth/login/login.html',
      controller: 'LoginController'
    })
    .state('app.signup', {
      url: '/signup',
      templateUrl: 'auth/signup/signup.html',
      controller: 'SignupController'
    });
})
