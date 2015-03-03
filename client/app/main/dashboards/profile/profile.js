angular.module('Daas.main.dashboards.profile', [
  'Daas.main.dashboards.profile.username',
  'Daas.main.dashboards.profile.password'
  ])

.controller('ProfileController', function($scope, $mdDialog){
  $scope.username = "Benoy"
  $scope.password = "openme"
  $scope.valuesChanged = false;
  $scope.passwordChanged = false;

  // $scope.changeUsername = function(ev) {
  //   console.log(ev);
  //   $mdDialog.show({
  //     templateUrl:
  //   });
  //   var confirm = $mdDialog.confirm()
  //     .title('Change Username')
  //     .content('All of the banks have agreed to forgive you your debts.')
  //     .ariaLabel('Lucky day')
  //     .ok('Please do it!')
  //     .cancel('Sounds like a scam')
  //     .targetEvent(ev);
  //   $mdDialog.show(confirm).then(function() {
  //     $scope.alert = 'You decided to get rid of your debt.';
  //   }, function() {
  //     $scope.alert = 'You decided to keep your debt.';
  //   });
  // };

  $scope.changePassword = function(ev) {
    console.log(ev);
    var confirm = $mdDialog.confirm()
      .title('Change Password')
      .content('All of the banks have agreed to forgive you your debts.')
      .ariaLabel('Lucky day')
      .ok('Please do it!')
      .cancel('Sounds like a scam')
      .targetEvent(ev);
    $mdDialog.show(confirm).then(function() {
      $scope.alert = 'You decided to get rid of your debt.';
    }, function() {
      $scope.alert = 'You decided to keep your debt.';
    });
  };


})
