var pin = angular.module('pin', ['ui.router', 'restangular']);

pin.factory('_', ['$window', function($window){
  return $window._;
}]);

pin.config(['RestangularProvider', function(RestangularProvider) {
  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');
}]);

pin.config(['$stateProvider', '$urlProvider', function($stateProvider, $urlProvider) {
  $urlProvider.otherwise('/pins');

  $stateProvider
    .state('pins', {
      url: '/pins',
      abstract: true,
    })

    .state('pins.index', {
      url: ''
    })

    .state('pins.show', {
      url: '/:id'
    });
    
}]);