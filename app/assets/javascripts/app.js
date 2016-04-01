var pinboard = angular.module('pinboard', ['ui.router', 'restangular'])

.config(['RestangularProvider', function(RestangularProvider){
  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');
}])

.config(['$urlRouterProvider', '$stateProvider',
  function($urlRouterProvider, $stateProvider){
    // $urlRouterProvider.otherwise('/pins');

    $stateProvider
      .state('pins', {
        template: '<div ui-view></div>'
      })
      .state('pins.index',{
        url: "/pins",
        templateUrl: '/templates/pins/index.html',
        controller: 'PinsIndexCtrl',
        resolve: {
          pins: ['Pins', function(Pins){
            return Pins.getList();
          }]
        }
      })
      .state('pins.show', {
        url: "pins/:id",
        templateUrl: "/templates/pins/show.html",
        controller: 'PinsShowCtrl',
        resolve: {
          pin: ['Pins', '$stateParams',
                  function(Pins, $stateParams){
                    return Pins.one($stateParams.id).get();
                }]}
      })
      .state('pins.edit', {
        url: 'pins/:id/edit',
        templateUrl: 'templates/pins/edit.html',
        controller: 'PinsEditCtrl',
        resolve: {
          pin: ['Pins', '$stateParams', function(Pins, $stateParams) {
            return Pins.one($stateParams.id).get();
          }]
        }
      });


  }])

.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});
