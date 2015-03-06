angular.module('Daas.main.dashboards.dashboardService', ['ngCookies'])

.factory('DashboardLoad', function($http, $cookies){
  return {
    data: [],
    saveDash: function(){
      var counter = 1;
      var obj = {
        title: 'dashboard' + counter++,
        widgets: this.data
      };
      $http({
        method: 'POST',
        url: '/user/dashboardSave',
        data: obj
      }).then(function(resp){
        console.log(resp);
      });
    },
    loadDash: function(){
      $http({
        method: 'POST',
        url: '/user/dashboardLoad',
        data: { token: $cookies.Token }
      }).then(function(resp){
        console.log(resp);
      })
    }
  }
});
