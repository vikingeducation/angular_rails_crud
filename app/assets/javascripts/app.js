var crudpin = angular.module('crudpin', ['ui.router', 'restangular'])


.config( ['$stateProvider', '$urlRouterProvider', 'RestangularProvider',
  function($stateProvider, $urlRouterProvider, RestangularProvider) {


  // REST configurations
  RestangularProvider.setBaseUrl('/api');
  RestangularProvider.setRequestSuffix('.json');
  RestangularProvider.setDefaultHttpFields({
    'content-type': 'application/json'
  });


  // Routing
  $urlRouterProvider.otherwise("/pins");

  $stateProvider

    .state('pins', {
      url: '/pins',
      templateUrl: '/templates/pins/pinsIndex.html',
      controller: 'PinsIndexCtrl',
      resolve: {
        pins: ['Restangular', function(Restangular){
          return Restangular.all('pins').getList();
        }]
      }
    })

    .state('pins.show', {
      url: '/:id',
      templateUrl: '/templates/pins/pinsShow.html',
      controller: 'PinsShowCtrl'
    })


}])


crudpin.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
})