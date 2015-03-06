angular.module('Daas.main.dashboards.dashboardService', ['ngCookies'])

.factory('DashboardLoad', function($http, $cookies){
  return {
    saveDash: function(data){
      var counter = 1;
      var obj = {
        title: 'dashboard' + counter++,
        widgets: data,
        token: $cookies.Token
      };
      $http({
        method: 'POST',
        url: '/user/dashboardSave',
        data: obj
      }).then(function(resp){
        console.log(resp);
      });
    }
  }
});
