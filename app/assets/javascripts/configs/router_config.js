// ----------------------------------------
// Router
// ----------------------------------------

Crudangles.config(['$urlRouterProvider', '$stateProvider',
  function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/pins');

    $stateProvider
      .state('pins', {
        abstract: true,
        url: '/pins',
        templateUrl: 'templates/pinsTemplate.html',
      })
      .state('pins.index', {
        url: '',
        views: {
          '': {
            templateUrl: 'templates/pinsIndex.html',
            controller: 'PinsIndexCtrl',
          },
          'form': {
            templateUrl: 'templates/pinsNew.html',
            controller: 'PinsNewCtrl',
          }
        },
        // resolve: {
        //   "pins": ['PinService', function(PinService) {
        //     return PinService.getPins();
        //   }]
        // },
      })
      .state('pins.show', {
        url: '/:id',
        views: {
          '': {
            templateUrl: 'templates/pinsShow.html',
            controller: 'PinsShowCtrl',
          }
        },
        resolve: {
          "pin": ['$stateParams', 'PinService', function($stateParams, PinService) {
            return PinService.getPin($stateParams.id);
          }]
        },
      })
      .state('pins.edit', {
        url: '/:id/edit',
        views: {
          '': {
            templateUrl: 'templates/pinsEdit.html',
            controller: 'PinsEditCtrl',
          }
        },
        resolve: {
          "pin": ['$stateParams', 'PinService', function($stateParams, PinService) {
            return PinService.getPin($stateParams.id);
          }]
        },
      })
      ;
  }]);


Crudangles.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);
Crudangles.run(['$rootScope', function($rootScope) {
  $rootScope.$on("$stateChangeError", console.error.bind(console));
}]);




