var pin = angular.module('pin', ['ui.router', 'restangular', 'Devise']);

pin.factory('_', ['$window', function($window){
  return $window._;
}]);

// CSRF support
pin.config(
  ["$httpProvider",
  function($httpProvider) {
    var token = $('meta[name=csrf-token]')
      .attr('content');
    $httpProvider
      .defaults
      .headers
      .common['X-CSRF-Token'] = token;
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
      template: '<div ui-view></div>',
      resolve: {
        pins: function(PinsService) {
          return PinsService.all();
        }
      }
    })

    .state('pins.index', {
      url: '',
      templateUrl: '/templates/pins/index.html',
      controller: 'PinsCtrl'
    })

    .state('pins.show', {
      url: '/:id',
      templateUrl: '/templates/pins/show.html',
      controller: 'PinsShowCtrl',
      resolve: {
        pin: ['PinsService', '$stateParams', function(PinsService, $stateParams){
          return PinsService.find($stateParams.id);
        }]
      }
    })

    .state('pins.edit', {
      url: '/edit/:id',
      templateUrl: '/templates/pins/edit.html',
      controller: 'PinsShowCtrl',
      resolve: {
        pin: ['PinsService', '$stateParams', function(PinsService, $stateParams){
          return PinsService.find($stateParams.id);
        }]
      }
    });
    
}]);