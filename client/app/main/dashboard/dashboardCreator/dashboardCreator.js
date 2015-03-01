angular.module('Daas.main.dashboard.dashboardCreator', [])

.controller('CreatorController', function($scope, $rootScope, $timeout){
  var data = [['2009', 55],['2011', 20],['2012', 39],['2013', 60],['2014', 38]];

  $scope.getAndroid = function(){
    return '../../../lib/angular-material/demos/icon/demoSvgIconsFromURL/img/icons/android.svg';
  };

  $scope.save = function(){
    var children = angular.element(document.getElementById('chartsdisplay')).children();
    for(var i=0; i< children.length; i++){
      children[i] = JSON.stringify(children[i]);
    }
    console.log('being saved', children);
    // var kids = JSON.stringify(children);
    // console.log('being saved', kids);
  };

  $scope.delete = function(){
    alert('You need to implement the delete function');
  };

/*
Every chart reference stored in the database should have a unique id.  This id will
enable us to identify the specific chart in the DOM later on when we want to manipulate it.
*/
  $scope.makeBarChart = function(id, position, val){
    angular.element(document.getElementById('chartsdisplay')).append("<div id='u"+id+"' class='uchart' data-function-called='barchart'></div>");
    c3.generate({
        bindto: '#u'+id,
        data: {
          columns: val,
          type: 'bar'
        }
    });

    var fun1 = function(pos){
    angular.element(document.getElementById('chartsdisplay')).attr('style', pos);
    };

/*
This timeout is just to check if the chart moves in 1/2 sec
*/
    /*$timeout(function(){
      fun1(position);
    }, 500);*/
  };
/*
the following 2 lines assigns coordinates and makes a call to create the barchart with the coordinates
*/
  var newPos = 'transform: translate3d(170px, 110px, 0px); cursor: move; -webkit-user-select: none; touch-action: none; z-index: 1001;';
  // $scope.makeBarChart(3, newPos, data);
  // $scope.makeBarChart(4, newPos, data);


/*
This makes all dom elements with a class name of uchart draggable
*/
  /*Draggable.create('.uchart', {
    edgeResistance: .78,
    bounds: '#container'
  });*/
});
