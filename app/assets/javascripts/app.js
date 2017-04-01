var fullCRUD = angular.module('fullCRUD', ['ui.router', 'restangular'])

.config(['RestangularProvider', function(RestangularProvider) {
  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');
}])

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/pins')

  $stateProvider
    .state('pins', {
      url: '/pins',
      views: {
        "": {
          templateUrl: '/templates/pins/index.html',
          controller: 'pinsCtrl'
        }
      },
      resolve: {
        pins: ['Restangular',
                function(Restangular) {
                  return Restangular.all('pins').getList();
        }]
      }
    })
})