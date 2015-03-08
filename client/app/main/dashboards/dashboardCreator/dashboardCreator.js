angular.module('Daas.main.dashboards.dashboardCreator', ['Daas.main.dashboards.dashboardCreatorDirective'])

.config(function($stateProvider){
  $stateProvider
    .state('app.main.dashboards.dashboardCreator', {
      url: '/dashboardcreator',
      templateUrl: 'main/dashboards/dashboardCreator/dashboardCreator.html',
      controller: 'CreatorController'
    });
})

.controller('CreatorController', function($scope, $rootScope, $mdDialog, $compile, $document, GetData, DashboardLoad, $timeout){
  // $scope.data = GetData.twitterapi();
  var toAppendTo = angular.element($document[0].getElementById('chartsdisplay'));

  $scope.addWidget = function(){
    var parentEl = document.getElementById('chartsdisplay');
    $mdDialog.show({
      parent: parentEl,
      controller: 'CreatorController',
      templateUrl: 'main/dashboards/dashboardcreator/templates/widgets.html'
    });
  };

  $scope.done = function(){
    $mdDialog.hide();
  };

  $scope.appendWidget = function(apiType, chartType, draggable){
    var el = DashboardLoad.appendWidget(apiType, chartType, draggable)($scope);
    toAppendTo.append(el);
  }

  $scope.preSave = function(){
    $mdDialog.show({
      controller: 'CreatorController',
      templateUrl: 'main/dashboards/dashboardcreator/templates/save.html'
    });
  }

  $scope.save = function(){
    $mdDialog.hide();
    name = $scope.dashboardName;
    var comments = $scope.dashboardComment;
    DashboardLoad.saveDash(name, comments);
  };

});
