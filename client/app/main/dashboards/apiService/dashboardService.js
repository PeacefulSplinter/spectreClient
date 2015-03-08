angular.module('Daas.main.dashboards.dashboardService', ['ngCookies'])

.factory('DashboardLoad', function($http, $cookies, $compile, rfc4122){
  return {
    saveDash: function(name, comments){
      var directives = [].map.call(document.querySelectorAll('.uchart'), function(el){
        console.log('I am the element', el);
        return {
          directive: '<' + el.parentElement.localName + '>' + '</' + el.parentElement.localName + '>',
          location: el.style.cssText
        }
      });
      var savedDate = JSON.stringify(new Date()).slice(1, 11);
      var obj = {
        id: rfc4122.v4(),
        title: name,
        comment: comments || 'none',
        lastSaved: savedDate,
        widgets: directives,
        token: $cookies.Token
      };
      $http({
        method: 'POST',
        url: '/user/dashboardSave',
        data: obj
      }).then(function(resp){
        console.log(resp);
        // swal("Dashboard Saved", "Don't stop now, keep on building!", "success");
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
    },
    loadOneDash: function(id){
      return $http({
        method: 'POST',
        url: '/user/dashboardLoad/' + id,
        data: { token: $cookies.Token }
      }).then(function(resp){
        return resp;
      })
    },
    appendWidget: function(apiType, chartType, draggable){
      var el = '<' + apiType + '-' + chartType + ' draggable="' + draggable + '">' + '</' + apiType + '-' + chartType + '>';
      return $compile(el);
    }
  }
});
