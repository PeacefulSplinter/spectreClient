angular.module('Daas.auth.signup', [])

.controller('SignupController', function($scope, $state, Auth){
  $scope.user = {
      username: '',
      password: '',
      title: 'Spectre Widgets Sign Up'
    };

  $scope.data = {};
  $scope.data.cb1 = false;

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
})
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('purple')
    .accentPalette('orange');
});
