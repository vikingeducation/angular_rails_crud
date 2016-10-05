var pin = angular.module('pin', ['ui.router', 'restangular']);

pin.factory('_', ['$window', function($window){
  return $window._;
}]);

pin.config(['RestangularProvider', function(RestangularProvider) {
  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');
}]);

pin.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/pins');

  $stateProvider
    .state('pins', {
      url: '/pins',
      abstract: true,
      template: '<div ui-view></div>'
    })

    .state('pins.index', {
      url: '',
      templateUrl: '/templates/pins.html'
    })

    .state('pins.show', {
      url: '/:id'
    });
    
}]);