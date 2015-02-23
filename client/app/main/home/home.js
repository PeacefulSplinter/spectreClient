angular.module('Daas.main.home', [])

.config(function($stateProvider){
  $stateProvider
    .state('app.main.home', {
      url: '/home',
      templateUrl: 'main/home/home.html',
      controller: 'HomeController'
    });
})
.controller('HomeController', function($scope, $state, $http){
  $scope.next = function(){
    $state.go('login');
  };

});
