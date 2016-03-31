var pinboard = angular.module('pinboard', ['ui.router', 'restangular'])

pinboard.config( ['RestangularProvider', function(RestangularProvider) {

  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');
  // RestangularProvider.setDefaultHttpFields({
  //   "content-type": "application/json"
  // });
  // RestangularProvider.setResponseExtractor( function( response, operation ) {
  //
  // });

}]);

pinboard.config(['$urlRouterProvider', '$stateProvider',
  function($urlRouterProvider, $stateProvider){

    $stateProvider

    .state("hello", {
      url: "/hello",
      templateUrl: "templates/hello.html",
      controller: "PinCtrl"
    })

    $urlRouterProvider.otherwise('/');

  }]);
