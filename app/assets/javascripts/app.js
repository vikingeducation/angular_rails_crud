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
        pins: ['Restangular', function(Restangular){
          return Restangular.all('pins').getList();
        }]
      }
    });

  $urlRouterProvider.otherwise('/pins/index');

})

.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});