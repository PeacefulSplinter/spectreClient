angular.module('Daas.main.dashboard.dashboards', [])

.controller('DashboardsController', function($scope, $http){
  //Make a call to the database to get a list of all the dashboards
  //Assuming that the list returned is an array of objects each of which contain metadata for each saved dashboard
  /*$http.get('route to our API to get a list of saved dashboards for the current user').success(function(data){
    the data should look like the following for 2 saved dashboards
    data = [object1, object2] as expanded below
    [
    {
      'name': 'myFirstDashboard',
      'integrations': [Twitter, Mailchimp]
    },
    {
      'name': 'super awesome dashboard',
      'integrations': ['Twitter', 'Mailchimp', 'Instagram']
    }
    ]
    $scope.dashboards = data;
  });*/

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

  $scope.dashboards = data;
})
