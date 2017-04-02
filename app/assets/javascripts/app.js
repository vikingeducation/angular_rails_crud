var fullCRUD = angular.module('fullCRUD', ['ui.router', 'restangular'])

.config(['RestangularProvider', function(RestangularProvider) {
  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');
  RestangularProvider.setDefaultHttpFields({
    'content-type': 'application/json'
  });
}])

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/pins')

  $stateProvider
    .state('pins', {
      url: '/pins',
      views: {
        "": {
          templateUrl: '/templates/pins/index.html',
          controller: 'pinsIndexCtrl'
        }
      },
      resolve: {
        pins: ['Restangular',
                function(Restangular) {
                  return Restangular.all('pins').getList();
        }]
      }
    })

    .state('pins.show', {
      url: '/:id',
      // templateUrl: '/templates/pins/show.html',
      // controller: "pinsShowCtrl",
      views: {
        "@": { 
          templateUrl: "/templates/pins/show.html", 
          controller: "pinsShowCtrl"
        }
      },
      resolve: {
        pin: ['Restangular', '$stateParams',
              function(Restangular, $stateParams) {
                return Restangular.one('pins', $stateParams.id).get(); //check syntax
              }]
      }
    })

    .state('pins.edit', {
      url: '/edit',
      views: { //in
        "pin-info@pins.edit": {
          templateUrl: '/templates/pins/pin.html',
          controller: "pinsCtrl"
        }
      }
    })
})