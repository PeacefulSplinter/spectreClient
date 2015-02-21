(function(){

  angular.module('Daas.main.dashboardDirective', [])

  .directive('draggable', function(){
    var gridWidth = 3000;
    var gridHeight = 3000;
    return function(scope, element){
      var tag = element[0].id;
      var draggables = Draggable.create('#' + tag, {
        type: 'x,y',
        edgeResistance: .78,
        bounds: '#p-container',
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
