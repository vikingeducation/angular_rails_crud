var pinboard = angular.module('pinboard',
                  ['ui.router', 'restangular', 'Devise']);

// pinboard.controller('testCtrl', ['$scope', function($scope){
//   $scope.testVar = 'testing';
// }]);

pinboard.config(['RestangularProvider', function(RestangularProvider){
    RestangularProvider.setBaseUrl('/api/v1');
    RestangularProvider.setRequestSuffix('.json');
}]);


pinboard.config(['$urlRouterProvider', '$stateProvider',
  function($urlRouterProvider, $stateProvider){
    $stateProvider
      .state('pins', {
        url: '/pins',
        templateUrl: 'templates/pinsLayout.html'
      })

      .state('pins.index', {
        url: '/index',
        templateUrl: 'templates/pinsIndex.html',
        controller: 'pinsIndexCtrl',
        resolve: {
          pins: ['Restangular', function(Restangular){
            return Restangular.all('pins').getList();
          }]
        }
      })

      .state('pins.show',{
        url: '/:id',
        templateUrl: 'templates/pinsShow.html',
        controller: 'pinShowCtrl',
        resolve: {
          pin: ['Restangular', '$stateParams',
                function(Restangular, $stateParams){
            return Restangular.one('pins', $stateParams.id).get();
          }]
        }

      })

      .state('pins.edit', {
        url: '/:id/edit',
        templateUrl: 'templates/pinsEdit.html',
        controller: 'pinShowCtrl',
        resolve: {
          pin: ['Restangular', '$stateParams',
                function(Restangular, $stateParams){
            return Restangular.one('pins', $stateParams.id).get();
          }]
        }
      });


  }]);

//for errors

pinboard.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});