var MyApp = angular.module('MyApp', ['ui.router', 'restangular']);

MyApp.config(['$urlRouterProvider', '$stateProvider',
  function($urlRouterProvider, $stateProvider){

  $urlRouterProvider.otherwise('');

  $stateProvider
    .state('test', {
      url: '',
      template: "heyo"
    })

}]);


// debugging
MyApp.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});
