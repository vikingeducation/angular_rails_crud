pinApp = angular.module('pinApp', ['ui.router', 'restangular'])

  .config( ['RestangularProvider', function(RestangularProvider) {

    RestangularProvider.setBaseUrl('/api/v1');
    RestangularProvider.setRequestSuffix('.json');
    RestangularProvider.setDefaultHttpFields({
        "content-type": "application/json"
    });
    RestangularProvider.setResponseExtractor( function( response, operation ) {
        // it would have defaulted to response.data
        // but we wanted the first item.
        return response.data;
    });

  }])

  .config(['$urlRouterProvider', '$stateProvider',
  function($urlRouterProvider, $stateProvider){

    $stateProvider
      .state('pins', {
        url: '/pins',
        templateUrl: '/templates/pins_layout.html',
      })
      .state('pins.index',{
        url: "/index",
        templateUrl: '/templates/pins_index.html',
        controller: 'pinsCtrl',
        resolve: {
          pins: ['Restangular', function(Restangular){
            return Restangular.all('pins').getList();
          }]
        }
      })


    $urlRouterProvider.otherwise('/pins');

  }])

.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});