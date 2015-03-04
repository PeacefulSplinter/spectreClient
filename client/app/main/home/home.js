angular.module('Daas.main.home', [])

.config(function($stateProvider){
  $stateProvider
    .state('app.main.home', {
      url: '/',
      templateUrl: 'main/home/home.html',
      controller: 'HomeController'
    });
})
.controller('HomeController', function($scope, $state, $interval){
  $scope.next = function(){
    $state.go('login');
  };

  $scope.randomData = function(){
    var output = [];
    var loc = ['NYC', 'LA', 'SF', 'DC', 'Miami', 'Portland', 'Chicago', 'Dallas', 'Austin', 'Boston', 'Austin'];
    for(var i=0; i<loc.length; i++){
      var max = 100;
      var min = 0;
      var randomNumber = Math.floor(Math.random() * (max-min)) + min;
      var arr = [loc[i], randomNumber];
      output.push(arr);
    }
    return output;
  };

  $scope.data = $scope.randomData();


  $scope.showTransitionChart = function(){
    var counter = 0;
    var a = ['bar','pie', 'donut'];

    var chart = c3.generate({
      bindto: '#transition-chart',
      data: {
        columns : $scope.data,
        type: 'pie'
      },
      transition: {
        duration: 1000
      }
    });
    var cb = function(){
      if(counter > a.length-1){
        counter = 0;
      }
      chart.transform(a[counter]);
      counter++;
    };
    $interval(cb, 3000);
  };
});
