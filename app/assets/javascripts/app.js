var PinBoard = angular.module('PinBoard', ['ui.router', 'restangular']);

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
    template: '<div class="container" ui-view></div>',
    resolve: {
      'pinsList': ['PinService', function(PinService) {
        return PinService.getPins();
      }]
    }
  })
  .state('pins.index', {
    url: '',
    templateUrl: '/templates/pins/index.html',
    controller: 'PinsIndexCtrl'
  })

}]);
