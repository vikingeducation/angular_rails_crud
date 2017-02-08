var App = angular.module('App', ['ui.router', 'restangular']);

App.config(['RestangularProvider', function(RestangularProvider){
  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');
}]);


App.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/pins');

  $stateProvider
    .state('home', {
      url: '',
      views: {
        'navbar' : {
          templateUrl: 'templates/_navbar.html'
        },
        'footer' : {
          templateUrl: 'templates/_footer.html'
        }
      }
    })

    .state('home.pins',{
      url: '/pins',
      views: {
        '@' : {
          templateUrl: 'templates/_pins.html',
          controller: 'PinsCtrl'
        },
        'pinForm@home.pins' : {
          templateUrl: 'templates/_pinForm.html',
          controller: 'PinsCtrl'
        }
      }
    })

    .state('home.pins.show', {
      url: '/:id',
      views: {
        '@' : {
          templateUrl: 'templates/_pin.html',
          controller: 'PinsCtrl'
        }
      }
    })



}]);
