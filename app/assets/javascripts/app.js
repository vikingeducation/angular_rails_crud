var pinboard = angular.module('pinboard', ['ui.router', 'restangular'])

pinboard.factory('_', ['$window', function($window) {
  return $window._; // assumes underscore has already been loaded on the page
}]);

pinboard.config( ['RestangularProvider', function(RestangularProvider) {

  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');
  RestangularProvider.setDefaultHttpFields({
    "content-type": "application/json"
  });
  // RestangularProvider.setResponseExtractor( function( response, operation ) {
  //
  // });

}]);

pinboard.config(['$urlRouterProvider', '$stateProvider',
  function($urlRouterProvider, $stateProvider){

    $stateProvider

    .state("pins", {
      url: "/pins",
      templateUrl: "templates/pins_index.html",
      controller: "PinCtrl"
    })

    $urlRouterProvider.otherwise('/pins');

  }]);
