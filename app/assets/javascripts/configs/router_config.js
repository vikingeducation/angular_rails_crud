// ----------------------------------------
// Router
// ----------------------------------------

Crudangles.config(['$urlRouterProvider', '$stateProvider',
  function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/pins');

    $stateProvider
      .state('pins', {
        url: '/pins',
        template: 'dynamic pins',
      });
  }]);


Crudangles.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);
Crudangles.run(['$rootScope', function($rootScope) {
  $rootScope.$on("$stateChangeError", console.error.bind(console));
}]);




