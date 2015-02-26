angular.module('Daas.main.dashboard.profile', [
  'Daas.main.dashboard.profile.username',
  'Daas.main.dashboard.profile.password'
  ])

.config(function($stateProvider){
  $stateProvider
    .state('app.main.dashboard.profile.username', {
      url: '',
      templateUrl: 'main/dashboard/profile/username/username.html',
      controller: 'usernameController'
    })
    .state('app.main.dashboard.profile.password', {
      url: '',
      templateUrl: 'main/dashboard/profile/password/password.html',
      controller: 'passwordController'
    })
})

.controller('ProfileController', function(){

})
