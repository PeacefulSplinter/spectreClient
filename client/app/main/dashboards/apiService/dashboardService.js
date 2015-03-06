angular.module('Daas.main.dashboards.dashboardService', ['ngCookies'])

.factory('DashboardLoad', function($http, $cookies){
  return {
    data: [],
    saveDash: function(){
      var obj = {
        title: 'dashboard',
        widgets: this.data,
        token: $cookies.Token
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
        return resp;
      })
    }
  }
});
