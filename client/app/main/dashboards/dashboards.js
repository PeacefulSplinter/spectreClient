angular.module('Daas.main.dashboards', [
  'Daas.main.dashboards.list',
  'Daas.main.dashboards.mydashboard',
  'Daas.main.dashboards.apiService',
  'Daas.main.dashboards.dashboardCreator'
])

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('app.main.dashboards', {
      url: '/dashboards',
      templateUrl: 'main/dashboards/dashboards.html',
      controller: 'DashboardsController'
    })
    .state('app.main.dashboards.list', {
      url: '',
      templateUrl: 'main/dashboards/dashboardList/list.html',
      controller: 'ListController'
    })
    $urlRouterProvider.otherwise('/dashboards');
})

.controller('DashboardsController', function($timeout, $scope, $rootScope, $mdSidenav, $mdDialog, Auth, $state, GetData, $cookieStore, $cookies, DashboardLoad){
  DashboardLoad.loadDash();
  DashboardLoad.loadDash().then(function(resp){
    $scope.name = resp.data.displayName || resp.data.username.charAt(0).toUpperCase() + resp.data.username.slice(1);
    $scope.picture = resp.data.picture || 'http://georgiapoliticalreview.com/wp-content/uploads/2014/04/Finn-The-Human.jpg';
  });


  $scope.appTheme = $rootScope.appTheme;

  if($cookies.Token){
    $state.go('app.main.dashboards.list');
  }else{
    $state.go('app.login');
  }

  $scope.onChange = function(val){
    if(val === 'twitAuth'){
      Auth.authLogin('tw');
    } else if (val === 'fbAuth'){
      Auth.authLogin('fb');
    } else if (val === 'googleAuth'){
      Auth.authLogin('g');
    } else if (val === 'mailchimpAuth'){
      Auth.authLogin('mc');
    } else {
      console.log('no auth by that name');
    }
  };

  $scope.toggleLeft = function() {
    $mdSidenav('left').toggle();
  };

  $scope.logout = function(){
    $cookieStore.remove('Token');
    $state.go('app.login');
  }

})

