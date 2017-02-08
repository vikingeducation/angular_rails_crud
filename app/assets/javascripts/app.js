var App = angular.module('App', ['ui.router', 'restangular']);

App.config(['RestangularProvider', function(RestangularProvider){
  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');
}]);


App.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/pins');

  $stateProvider
    .state('pins', {
      url: '/pins',
      templateUrl: 'templates/index.html',
      controller: 'PinsCtrl'
    })

    .state('pins.show', {
      url: '/:id',
      views: {
        '@' : {
          templateUrl: 'templates/show.html',
          controller: 'PinsCtrl'
        }
      }
    })

}]);
