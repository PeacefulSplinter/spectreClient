angular.module('Daas.main.dashboard.dashboardCreator', [])

.controller('CreatorController', function($scope, $rootScope){

  // 1. Add a <userchart> directive
  // 2. Make the directive draggable
  var data = [['2009', 30],['2011', 50],['2012', 100],['2013', 150],['2014', 1932]];
  /*var userSelection = $rootScope.twitterData.userSelection;

  var selection = {};

  for(var key in userSelection){
    if(userSelection[key] === true){
      selection[key] = key;
    }
  }*/

  /*$scope.numOfCharts = 5;

  for(var i=0; i<$scope.numOfCharts; i++){
    var idName = 'chart'+i;
    angular.element(document.getElementById('chartsdisplay')).append('<div class="uchart" id="'+idName+'"></div>');

    var chart1 = c3.generate({
      bindto : '#'+idName,
      data : {
        columns : data,
        type: 'bar'
      }
    });
  }*/

  var chart1 = c3.generate({
    bindto : '#chart1',
    size: {
        height: 240,
        width: 480
    },
    data : {
      columns : data,
      type: 'bar'
    },
    axis: {
      x: {
          label: 'Years'
      },
      y: {
          label: '# of Followers'
      }
    }
  });

  var chart2 = c3.generate({
    bindto : '#chart2',
    size: {
        height: 240,
        width: 480
    },
    data : {
      columns : data,
      type: 'pie'
    }
  });

  var chart3 = c3.generate({
    bindto : '#chart3',
    size: {
        height: 240,
        width: 480
    },
    data : {
      columns : data,
      type: 'donut'
    }
  });
  Draggable.create('.uchart');
});
