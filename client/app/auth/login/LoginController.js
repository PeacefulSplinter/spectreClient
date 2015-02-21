angular.module('Daas.auth.login', [])

.controller('LoginController', function(Auth, $scope, $state, $window, $interval){
  $scope.login = function(){
    if($scope.username && $scope.password){
      var obj = {};
      obj.username = $scope.username.toLowerCase();
      obj.password = $scope.password;
     var yeah = Auth.login(obj);
    }
  };

  $scope.loginFacebook = function(){
    Auth.authLogin('/auth/fb/facebook');
  };
  $scope.loginGoogle = function(){
    Auth.authLogin('/auth/g/google');
  };

});
