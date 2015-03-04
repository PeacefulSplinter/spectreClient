angular.module('Daas.main.dashboards', [
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
      controller: 'DashboardsController'
    })
    $urlRouterProvider.otherwise('/dashboards');
})

.controller('DashboardsController', function($scope, $mdSidenav, $mdDialog, Auth, $state, GetData, $cookieStore){
  $state.go('app.main.dashboards.list');
  var data = [
    {
      'name': 'myFirstDashboard',
      'lastSaved': '3/4/2012',
      'integrations': ['Twitter', 'Mailchimp'],
      'comments': 'This is a really cool dashboard I made back in 2014'
    },
    {
      'name': 'super awesome dashboard',
      'lastSaved': '3/4/2012',
      'integrations': ['Twitter', 'Mailchimp', 'Instagram'],
      'comments': 'I made this to show some really boring data and make is look dope'
    }
  ];
  $scope.picture = 'http://georgiapoliticalreview.com/wp-content/uploads/2014/04/Finn-The-Human.jpg'
  $scope.name = 'Mike';
  $scope.dashboards = data;
  $scope.twitAuth = false;

  $scope.onChange = function(val){
    if(val){
      Auth.authLogin('tw');
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

