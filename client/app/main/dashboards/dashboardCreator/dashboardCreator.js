angular.module('Daas.main.dashboards.dashboardCreator', ['Daas.main.dashboards.dashboardCreatorDirective'])

.config(function($stateProvider){
  $stateProvider
    .state('app.main.dashboards.dashboardCreator', {
      url: '/dashboardcreator',
      templateUrl: 'main/dashboards/dashboardCreator/dashboardCreator.html',
      controller: 'CreatorController'
    });
})

.controller('CreatorController', function($scope, $rootScope, $mdDialog, $compile, $document, GetData){
  $scope.data = GetData.twitterapi();

  var toAppendTo = angular.element($document[0].getElementById('chartsdisplay'));

  $scope.save = function(){
    var children = angular.element(document.getElementById('chartsdisplay')).children();
    console.log("HERE:", children)
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
    el = $compile(el)($scope);
    toAppendTo.append(el);
  };

});
