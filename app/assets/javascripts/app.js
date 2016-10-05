var PinBoard = angular.module('PinBoard', ['ui.router', 'restangular']);

PinBoard.factory('_', ['$window', function($window){
  return $window._;
}]);

BulletinBoard.config(['$stateProvider', '$urlRouterProvider', 'RestangularProvider',
function($stateProvider, $urlRouterProvider, RestangularProvider){

  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');

  $stateProvider.state('Pins', {
    abstract: true,
    url: '/pins',
    resolve: {
      'pins': ['PinService', function(PinService) {
        return PinService.getPins();
      }]
    }
  })
  .state('Pins.index', {
    url: '',
    templateUrl: '/pins/index.html',
    controller: 'PinsIndexCtrl'
  })

}]);