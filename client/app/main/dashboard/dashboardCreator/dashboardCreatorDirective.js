angular.module('Daas.main.dashboard.dashboardCreatorDirective', [])

  .directive('draggable', function(){
    return function(scope, element){
      // var tag = element[0].id;
      var draggables = Draggable.create('.uchart', {
        type: 'x,y',
        edgeResistance: .78,
        bounds: '#chartsdisplay'
      });
    }
  });
