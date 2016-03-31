var pinboard = angular.module('pinboard', ['ui.router', 'restangular'])

.config(['RestangularProvider', function(RestangularProvider){
  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');
}])

.config(['$urlRouterProvider', '$stateProvider',
  function($urlRouterProvider, $stateProvider){

    $stateProvider
      .state('pins', {
        url: '/pins',
        templateUrl: '/templates/pins.html'
      })
      .state('pins.index',{
        url: "/index",
        templateUrl: '/templates/pinsIndex.html',
        controller: 'PinsIndexCtrl',
        resolve: {
          pins: ['Restangular', function(Restangular){
            return Restangular.all('pins').getList();
          }]
        }
      })
      .state('pins.show', {
        url: "/:id",
        templateUrl: "/templates/pinsShow.html",
        controller: 'PinsShowCtrl',
        resolve: {
          pin: ['Restangular', '$stateParams',
                  function(Restangular, $stateParams){
                    return Restangular.one('pins', $stateParams.id).get();
                }]}
      })


    $urlRouterProvider.otherwise('/pins');

  }])

.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});