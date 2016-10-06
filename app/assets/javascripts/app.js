var PinBoard = angular.module('PinBoard', ['ui.router', 'restangular', 'Devise']);

PinBoard.factory('_', ['$window', function($window){
  return $window._;
}]);

PinBoard.config(['$stateProvider', '$urlRouterProvider', 'RestangularProvider',
function($stateProvider, $urlRouterProvider, RestangularProvider){

  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');

  $urlRouterProvider.otherwise('/pins')

  $stateProvider.state('pins', {
    abstract: true,
    url: '/pins',
    resolve: {
      'pinsList': ['PinService', function(PinService) {
        return PinService.getPins();
      }]
    },
    views: {
      "": {
        template: '<div ui-view></div>'
      },
      'nav': {
        templateUrl: '/templates/pins/nav.html',
        controller: 'NavCtrl'
      }
    }
  })
  .state('pins.index', {
    url: '',
    templateUrl: '/templates/pins/index.html',
    controller: 'PinsIndexCtrl'
  })
  .state('pins.edit', {
    url: '/edit/:id',
    templateUrl: '/templates/pins/edit.html',
    controller: 'PinsEditCtrl',
    resolve: {
      pin: ['$stateParams', 'PinService', function($stateParams, PinService) {
        return PinService.find($stateParams.id)
      }]
    }
  })
  .state('pins.show', {
    url: '/:id',
    templateUrl: '/templates/pins/show.html',
    controller: 'PinsShowCtrl',
    resolve: {
      pin: ['$stateParams', 'PinService', function($stateParams, PinService) {
        return PinService.find($stateParams.id)
      }]
    }
  })

}]);
