var app = angular.module('app', [
  'ui.router',
  'restangular',
]);

app.constant('_', window._);

app.run(function ($rootScope) {
  $rootScope._ = window._;
});

app.config( ["$httpProvider", "$stateProvider", "$urlRouterProvider", 'RestangularProvider', '_', function($httpProvider, $stateProvider, $urlRouterProvider, RestangularProvider, _) {

}]);
