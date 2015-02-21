angular.module('Daas.auth.signup', [])

.controller('SignupController', function($scope, $state, Auth){
  $scope.register = function(){
  	if($scope.username && $scope.password){
  	 var obj = {};
     obj.username = $scope.username.toLowerCase();
     obj.password = $scope.password;
     Auth.register(obj);
    }else{
      console.log('fucked');
    }
  };


});
