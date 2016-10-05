var app = angular.module("crud", ["ui.router", 'restangular'])

app.factory('_', ['$window', function(){
  return $window._;
}]);


app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/pins")

  $stateProvider.state("pins", {
    url: "/pins",
    templateUrl: "templates/pins/index.html",
    controller: "PinsCtrl"
  })

});

app.config(
  ["$httpProvider",
  function($httpProvider) {
  var token = $('meta[name=csrf-token]')
  .attr('content');
  $httpProvider
  .defaults
  .headers
  .common['X-CSRF-Token'] = token;
}]);

// Restangular config
app.config(
  ['RestangularProvider',
  function(RestangularProvider) {

  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');

}]);
