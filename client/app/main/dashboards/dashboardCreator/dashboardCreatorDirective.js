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
        templateUrl: '/main/dashboard/dashboardCreator/templates/twitterFollowerBarChart.html',
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
        templateUrl: '/main/dashboard/dashboardCreator/templates/twitterFollowerPieChart.html',
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
        templateUrl: '/main/dashboard/dashboardCreator/templates/twitterFollowerDonutChart.html',
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

