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
  // console.log('I am the dashboard', $rootScope.myDashBoard);
  var toAppendTo = angular.element($document[0].getElementById('my-dashboard-view'));
  $rootScope.myDashBoard.widgets.forEach(function(item){
    var el = $compile(item.directive)($scope);
    // console.log('I am the element', el);
    // console.log('I am the css', item.location);
    // el.removeAttr('draggable');
    // el[0].style.cssText = item.location;
    toAppendTo.append(el);
    // console.log('I am cssText before', el[0].style.cssText)
    // console.log('I am cssText after', el[0].style.cssText)
    $timeout(function(){
      var el = angular.element(document.querySelectorAll('.uchart'));
      for(var i = 0; i < el.length; i++){
        angular.element(el[i]).removeClass('uchart');
        angular.element(el[i]).removeAttr('draggable');
        el[i].style.cssText = $rootScope.myDashBoard.widgets[i].location;
        var chart = $compile(el[i])($scope);
        toAppendTo.append(chart);
      }
    }, 500);
  });
});
