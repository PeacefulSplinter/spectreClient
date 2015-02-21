angular.module('Daas.main.home', [])

.controller('HomeController', function($scope, $state, $http){
  $scope.next = function(){
    $state.go('login');
  };

});
