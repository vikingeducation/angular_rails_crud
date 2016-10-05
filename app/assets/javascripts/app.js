var app = angular.module('PinBoard', ['ui.router', 'restangular']);

app.factory('_', ['$window', function($window) {
  return $window._;
}]);

app.config(['$stateProvider', '$urlRouterProvider', 'RestangularProvider',
function($stateProvider, $urlRouterProvider, RestangularProvider){

  // Restangular
  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');

  $urlRouterProvider.otherwise('/pins');

  $stateProvider
    .state('Pins', {
      url: '/pins',
      views: {
        '': {
          templateUrl: '/templates/index.html',
          controller: 'PinIndexCtrl'
        }
      }
    });
    // .state('Posts.show',  {
    //   url: '/:id',
    //   views: {
    //     '@': {
    //       templateUrl: '/templates/posts/show.html',
    //       controller: 'PostsShowCtrl'
    //     }
    //   },
    //   onEnter: function() {
    //     console.log('this is firing (SHOW)');
    //   }
    // });
}]);


app.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});
