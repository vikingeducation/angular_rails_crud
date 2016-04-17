var pinboard = angular.module('pinboard', ['ui.router', 'restangular'])

.config(['RestangularProvider', function(RestangularProvider){
  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');
}])

.config( function($stateProvider, $urlRouterProvider ){

  $stateProvider
    .state('pins', {
      url: '/pins',
      templateUrl: 'templates/pinsLayout.html'
    })

    .state('pins.index', {
      url: '/index',
      templateUrl: 'templates/pins/index.html',
      controller: 'PinsIndexCtrl',
      resolve: {
        pins: ['PinsAPI', function( PinsAPI ){
          return PinsAPI.index();
        }]
      }
    })

    .state('pins.show', {
      url: '/show/:id',
      templateUrl: 'templates/pins/show.html',
      controller: 'PinsShowCtrl',
      resolve: {
        pin: ['PinsAPI', '$stateParams', function( PinsAPI, $stateParams ){
          return PinsAPI.show($stateParams.id);
        }]
      }
    })

    .state('pins.edit', {
      url: '/edit/:id',
      templateUrl: 'templates/pins/edit.html',
      controller: 'PinsEditCtrl',
      resolve: {
        pin: ['PinsAPI', '$stateParams', function( PinsAPI, $stateParams ){
          return PinsAPI.show($stateParams.id);
        }]
      }
    });

  $urlRouterProvider.otherwise('/pins/index');

})

.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});