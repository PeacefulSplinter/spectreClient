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

  $scope.appendWidget = function(event, type){
    if(type === 'pie') {
      el = '<twitter-follower-piechart></twitter-follower-piechart>'
    }
    if(type === 'bar') {
      el = '<twitter-follower-barchart></twitter-follower-barchart>'
    }
    if(type === 'donut') {
      el = '<twitter-follower-donutchart></twitter-follower-donutchart>';
    }
     if(type === 'line') {
      el = '<twitter-follower-line-chart><twitter-follower-line-chart>';
    }
    if(type === 'spline') {
      el = '<twitter-follower-spline-chart></twitter-follower-spline-chart>';
    }
    if(type === 'areaSpline') {
      el = '<twitter-follower-area-spline-chart></twitter-follower-area-spline-chart>';
    }
    DashboardLoad.data.push(el);
    el = $compile(el)($scope);
    toAppendTo.append(el);
  };

  $scope.save = function(){
    DashboardLoad.saveDash();
  };

});
