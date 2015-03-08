(function(){
  angular.module('Daas.main.dashboards.dashboardCreatorDirective', [
    'Daas.main.dashboards.apiService'
    ])

    .directive('barchartLayout', function(){
      return function(scope, element, attr){
        element.css({
          maxHeight: "40px",
          maxWidth: "350px"
        });
      };
    })

    .directive('twitterFollowerBarchart', function(){
      return {
        restrict: 'E',
        templateUrl: '/main/dashboards/dashboardCreator/templates/tw/twitterFollowerBarChart.html',
        scope: {
          draggable: '@'
        },
        link: function(scope, element, attr){
          var draggables = Draggable.create(element[0].children[0], {
            type: 'x,y',
            edgeResistance: .78,
            bounds: '#chartsdisplay'
          });
          console.log('draggable', draggables);
          console.log('element', element);
          console.log('scope draggable', scope.draggable);
          if(scope.draggable === "true"){
            draggables[0].enable();
          }else{
            draggables[0].disable();
          }
          c3.generate({
            bindto: '#tbar',
            size: {
              height: 290,
              width: 340
            },
            data: {
              columns: [['2009', 30],['2011', 50],['2012', 100],['2013', 150],['2014', 192]],
              type: 'bar'
            }
          });
        },
      }
    })

    .directive('twitterFollowerPiechart', function(){
      return {
        restrict: 'E',
        templateUrl: '/main/dashboards/dashboardCreator/templates/tw/twitterFollowerPieChart.html',
         scope: {
          draggable: '@'
        },
        link: function(scope, element, attr){
          var draggables = Draggable.create(element[0].children[0], {
            type: 'x,y',
            edgeResistance: .78,
            bounds: '#chartsdisplay'
          });
          if(scope.draggable === "true"){
            draggables[0].enable();
          }else{
            draggables[0].disable();
          }
          c3.generate({
            bindto: '#tpie',
            size: {
              height: 290,
              width: 340
            },
            data: {
              columns: [['2009', 30],['2011', 50],['2012', 100],['2013', 150],['2014', 192]],
              type: 'pie'
            }
          });
        },
      }
    })

    .directive('twitterFollowerDonutchart', function(GetData){
      return {
        restrict: 'E',
        templateUrl: '/main/dashboards/dashboardCreator/templates/tw/twitterFollowerDonutChart.html',
         scope: {
          draggable: '@'
        },
        link: function(scope, element, attr){
          var draggables = Draggable.create(element[0].children[0], {
            type: 'x,y',
            edgeResistance: .78,
            bounds: '#chartsdisplay'
          });
          if(scope.draggable === "true"){
            draggables[0].enable();
          }else{
            draggables[0].disable();
          }
          c3.generate({
            bindto: '#tdonut',
            size: {
              height: 290,
              width: 340
            },
            data: {
              columns: [['2009', 30],['2011', 50],['2012', 100],['2013', 150],['2014', 192]],
              // columns: data,
              type: 'donut'
            }
          });
        },
      }
    })
    .directive('twitterFollowerLineChart', function(){
      return{
        restrict: 'E',
        templateUrl: '/main/dashboards/dashboardCreator/templates/tw/twitterFollowerLineChart.html',
        scope: {
          draggable: '@'
        },
        link: function(scope, element, attr){
          var draggables = Draggable.create(element[0].children[0], {
            type: 'x,y',
            edgeResistance: .78,
            bounds: '#chartsdisplay'
          });
          if(scope.draggable === "true"){
            draggables[0].enable();
          }else{
            draggables[0].disable();
          }
          var draggables = Draggable.create(element[0], {
            type: 'x,y',
            edgeResistance: .78,
            bounds: '#chartsdisplay'
          });
          if(scope.draggable){
            draggables.enable();
          }else{
            draggables.disable();
          }
          c3.generate({
            bindto: '#tline',
            size: {
                height: 290,
                width: 340
              },
            data: {
              columns: [
              ['data1', 30, 200, 100, 400, 150, 250],
              ['data2', 50, 20, 10, 40, 15, 25]
              ]
            },
            types: {
              data1: 'area',
              data2: 'area-spline'
            },
            groups: [['data1', 'data2']]
          });
        }
      };
    })
    // .directive('draggable', function(){
    //   return function(scope, element){

    //   }
    // })
})()

