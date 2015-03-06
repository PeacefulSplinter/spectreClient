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
        controller: function(){
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
        controller: function(){
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
      // var data = GetData.twitterapi();
      return {
        restrict: 'E',
        templateUrl: '/main/dashboards/dashboardCreator/templates/tw/twitterFollowerDonutChart.html',
        controller: function(){
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
        controller: function(){
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
    .directive('draggable', function(){
      return function(scope, element){
        // var tag = element[0].id;
        var draggables = Draggable.create('.uchart', {
          type: 'x,y',
          edgeResistance: .78,
          bounds: '#chartsdisplay'
        });
      }
    })
})()

