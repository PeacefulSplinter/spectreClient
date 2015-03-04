angular.module('Daas.auth.login', [])

.controller('LoginController', function(Auth, $scope, $state, $window, $interval, $rootScope){
  $scope.user = {
      username: '',
      password: '',
      title: 'Spectre Widgets Login'
    };

  $scope.data = {};
  $scope.data.cb1 = false;

  $scope.authError = {};
  $scope.login = function(){
    if($scope.username && $scope.password) {
      var obj = {};
      obj.username = $scope.username.toLowerCase();
      obj.password = $scope.password;
      var yeah = Auth.login(obj);
    }
  };

  $scope.loginFacebook = function(){
    Auth.authLogin('fb');
  };
  $scope.loginGoogle = function(){
    Auth.authLogin('g');
  };
});
