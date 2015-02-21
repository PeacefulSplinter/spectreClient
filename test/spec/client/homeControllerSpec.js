describe('HomeController', function(){
  beforeEach(module('Daas'));

  var $controller;
  var $scope;
  var $rootScope;
  var $state;
  var Auth;

  beforeEach(function($injector){
    $controller = $injector.get('$controller');
    $rootScope = $injector.get('$rootScope');
    $state = $injector.get('$state');
    $scope =  $rootScope.$new();
    Auth = $injector.get('Auth');

    createController = function(){
      return $controller('HomeController', {
        $scope: $scope,
        Auth: Auth,
        $state: $state
      })
    };
  });

  it('should have a next method on scope', function(){
    createController();
    expect($scope.next).to.be.a('function');
  });


});
