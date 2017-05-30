var MyApp = angular.module('MyApp', ['ui.router', 'restangular']);

MyApp.config(['RestangularProvider',
  function(RestangularProvider) {
    RestangularProvider.setBaseUrl('/api/v1');
    RestangularProvider.setRequestSuffix('.json');
  }]);

MyApp.config(['$urlRouterProvider', '$stateProvider',
  function($urlRouterProvider, $stateProvider){

  $urlRouterProvider.otherwise('/pins');

  $stateProvider
    .state('pins', {
      abstract: true,
      url: '/pins',
      resolve: {
        "pins": ['PinService', function(PinService) {
          return PinService.all();
        }]
      }
    })

    .state('pins.index', {
      url: '',
      views: {
        "": {
          templateUrl: "/templates/pins/index.html",
          controller: "PinIndexCtrl"
        }
      }
    })

    .state('pins.show', {
      url: '/:id',
      views: {
        "": {
          templateUrl: "/templates/pins/show.html",
          controller: "PinShowCtrl"
        }
      },
      resolve: {
        "pin": ['PinService', '$stateParams', function(PinService, stateParams) {
          return PinService.getPin( stateParams.id );
        }]
      }
    })

    // .state('pins.edit', {
    //   url: '/:id/edit',
    //   views: {
    //     "": {
    //       template: "edit template"
    //     }
    //   }
    // })


}]);





// debugging
MyApp.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});
