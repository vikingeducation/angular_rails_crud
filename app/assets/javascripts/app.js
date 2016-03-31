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
      url: "/",
      template: "<div ui-view></div>",
      controller: "PinCtrl"
    })
    .state("pins.index", {
      url: "pins",
      templateUrl: "templates/pins_index.html",
      controller: "PinCtrl"
    })
    .state("pins.show", {
      url: "pins/:id",
      templateUrl: "templates/pins_show.html",
      controller: "PinCtrl"
    })
    .state("pins.edit", {
      url: "pins/:id/edit",
      templateUrl: "templates/pins_edit.html",
      controller: "PinCtrl"
    })

    $urlRouterProvider.otherwise('/pins');

  }]);
