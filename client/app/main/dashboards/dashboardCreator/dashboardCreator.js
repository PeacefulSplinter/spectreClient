angular.module('Daas.main.dashboards.dashboardCreator', ['Daas.main.dashboards.dashboardCreatorDirective'])

.config(function($stateProvider){
  $stateProvider
    .state('app.main.dashboards.dashboardCreator', {
      url: '/dashboardcreator',
      templateUrl: 'main/dashboards/dashboardCreator/dashboardCreator.html',
      controller: 'CreatorController'
    });
})

.controller('CreatorController', function($scope, $rootScope, $mdDialog, $compile, $document){
  var data = [['2009', 55],['2011', 20],['2012', 39],['2013', 60],['2014', 38]];
  $rootScope.myContainer = angular.element('<div id="chartsdisplay" class="ng-scope"></div>');

  var toAppendTo = angular.element(window.document.getElementById('chartsdisplay'));
  var el = '<twitter-follower-barchart></twitter-follower-barchart>';
  el = $compile(el)($rootScope);

  $scope.save = function(){
    var children = angular.element(document.getElementById('chartsdisplay')).children();
    for(var i=0; i< children.length; i++){
      children[i] = JSON.stringify(children[i]);
    }
    console.log('being saved', children);
    // var kids = JSON.stringify(children);
    // console.log('being saved', kids);
  };

  $scope.addWidget = function(){
    var parentEl = document.getElementById('chartsdisplay');
    $mdDialog.show({
      parent: parentEl,
      controller: 'CreatorController',
      templateUrl: 'main/dashboards/dashboardcreator/templates/widgets.html'
    });
  };

  $scope.appendWidget = function(){
    console.log(el);
    toAppendTo.append(el);
  };

});
