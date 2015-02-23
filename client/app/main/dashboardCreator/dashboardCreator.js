(function(){

  angular.module('Daas.main.dashboardDirective', [])

  .directive('draggable', function(){
    var $container = document.getElementById("container");
    var gridWidth = 196;
    var gridHeight = 100;
    var gridRows = 6;
    var gridColumns = 10;

    var x;
    var y;
    var i;
    for (i = 0; i < gridRows * gridColumns; i++) {
      y = Math.floor(i / gridColumns) * gridHeight;
      x = (i * gridWidth) % (gridColumns * gridWidth);
      var div = document.createElement('div');
      div.style.position = "absolute";
      div.style.top = y + 'px';
      div.style.left = x + 'px';
      div.style.width = gridWidth-1 + 'px';
      div.style.height = gridHeight-1 + 'px';
      div.style.border = "thick solid #454545";
      angular.element($container).prepend(div);
      };

    return function(scope, element){
      var tag = element[0].id;
      var draggables = Draggable.create('#' + tag, {
        type: 'x,y',
        edgeResistance: .78,
        bounds: '#container',
        liveSnap: true,
        snap:{
          x: function(endValue) {
            return Math.round(endValue / gridWidth) * gridWidth;
          },
          y: function(endValue) {
            return Math.round(endValue / gridHeight) * gridHeight;
          }
        }
      });
    }
  });
})();
