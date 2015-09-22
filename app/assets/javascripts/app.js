pinApp = angular.module('pinApp', ['ui.router', 'restangular'])

  .config( ['RestangularProvider', function(RestangularProvider) {

    RestangularProvider.setBaseUrl('/api/v1');
    RestangularProvider.setRequestSuffix('.json');
    RestangularProvider.setDefaultHttpFields({
        "content-type": "application/json"
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
        controller: 'pinsIndexCtrl',
        resolve: {
          pins: ['Restangular', function(Restangular){
            return Restangular.all('pins').getList();
          }]
        }
      })

      .state('pins.show',{
        url: "/:id",
        templateUrl: '/templates/pins_show.html',
        controller: 'pinsShowCtrl',
        resolve: {
          pin: ['Restangular', '$stateParams',
                function(Restangular, $stateParams){
                  return Restangular.one('pins', $stateParams.id).get();
          }]
        }
      })

      .state('pins.edit',{
        url: "/:id/edit",
        templateUrl: '/templates/pins_edit.html',
        controller: 'pinsShowCtrl',
        resolve: {
          pin: ['Restangular', '$stateParams',
                function(Restangular, $stateParams){
                  return Restangular.one('pins', $stateParams.id).get();
          }]
        }
      })
      .state('pins.delete', {
        url: "/:id/delete",
        controller: 'pinsShowCtrl',
        resolve: {
          pin: ['Restangular', '$stateParams',
                function(Restangular, $stateParams){
                  return Restangular.one('pins', $stateParams.id).get();
          }]
        }
      });


    $urlRouterProvider.otherwise('/pins');

  }])

  .run(function($rootScope){
    $rootScope.$on("$stateChangeError", console.log.bind(console));
  });