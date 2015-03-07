angular.module('Daas.main.dashboards.dashboardService', ['ngCookies'])

.factory('DashboardLoad', function($http, $cookies){
  return {
    data: [],
    loc: [],
    saveDash: function(name, comments){
      var savedDate = JSON.stringify(new Date()).slice(1, 11)
      var obj = {
        title: name,
        comment: comments || 'none',
        lastSaved: savedDate,
        location: this.loc,
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
      return $http({
        method: 'POST',
        url: '/user/dashboardLoad',
        data: { token: $cookies.Token }
      }).then(function(resp){
        return resp;
      })
    }
  }
});
