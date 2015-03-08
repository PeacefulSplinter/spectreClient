angular.module('Daas.main.dashboards.mydashboard', [])

.config(function($stateProvider){
  $stateProvider
    .state('app.main.dashboards.mydashboard', {
      url: '/mydashboard/:id',
      templateUrl: 'main/dashboards/myDashboard/myDashboard.html',
      controller: 'MyDashboardController'
    })
})

.controller('MyDashboardController', function($scope, $compile, $timeout, $rootScope, $mdSidenav, $mdDialog, $document){

  var toAppendTo = angular.element($document[0].getElementById('my-dashboard-view'));
  $rootScope.myDashBoard.widgets.forEach(function(item){
    var el = $compile(item.directive)($scope);
    toAppendTo.append(el);
    $timeout(function(){
      var el = angular.element(document.querySelectorAll('.uchart'));
      for(var i = 0; i < el.length; i++){
        angular.element(el[i]).removeAttr('draggable');
        el[i].style.cssText = $rootScope.myDashBoard.widgets[i].location;
        var chart = $compile(el[i])($scope);
        toAppendTo.append(chart);
      }
    }, 500);
  });
});
