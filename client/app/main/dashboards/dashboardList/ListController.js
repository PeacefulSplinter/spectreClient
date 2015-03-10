angular.module('Daas.main.dashboards.list', [])

.controller('ListController', function(Themes, $state, $scope,$mdDialog, $rootScope, DashboardLoad){
  DashboardLoad.loadDash().then(function(resp){
    $scope.dashboards = resp.data.savedDashboards;
    $scope.lastSaved = resp.data.lastSaved;
    $scope.comment = resp.data.comments;
  });

  $scope.themes = Themes.names;
  $scope.appTheme = $rootScope.appTheme;
  $scope.loadDash = function(id){
    DashboardLoad.loadOneDash(id)
    .then(function(resp){
      $rootScope.myDashBoard = resp.data;
      $state.transitionTo('app.main.dashboards.mydashboard', resp.data);
    });
  }

  $scope.changeColor = function(event){
    console.log(event.srcElement.offsetParent.nextElementSibling);
   var element = angular.element(event.srcElement.offsetParent.nextElementSibling);
   $mdDialog.show({
      controller: 'ListController',
      templateUrl: 'main/dashboards/dashboardcreator/templates/changeColor.html'
    });
  }
});
