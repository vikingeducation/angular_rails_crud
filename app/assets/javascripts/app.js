var app = angular.module('app', ['ui.router', 'restangular']);


app.config([
  "$httpProvider",
  function($httpProvider) {
    var token = $('meta[name=csrf-token]').attr('content');
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = token;
  }
]);

app.config([
  'RestangularProvider',
  function(RestangularProvider) {

    //RestangularProvider.setBaseUrl('/api/v1');
    RestangularProvider.setRequestSuffix('.json');
    RestangularProvider.setDefaultHttpFields({"content-type": "application/json"});
  }
]);


app.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("/pins");

  $stateProvider
    .state("pins", {
      url: "/pins",
      views: {
        "": {
          templateUrl: "templates/pins/index.html",
          controller: "PinsCtrl" 
        },

        "pin-form@pins": {
          templateUrl: "templates/pins/new.html",
          controller: "NewPinCtrl"
        }
      }
    })


    
})








app.factory("_", ['$window', function($window){
  return $window._;
}]);