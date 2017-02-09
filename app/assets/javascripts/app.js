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
      anstract: true,
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

    .state('home.show', {
      url: '/:id',
      views: {
        '@' : {
          templateUrl: 'templates/_pin.html',
          controller: 'PinsCtrl'
        }
      }
    })

    .state('home.edit', {
      url: '/:id/edit',
      views: {
        '@' : {
          templateUrl: 'templates/_edit_pin.html',
          controller: 'PinsCtrl'
        }
      }
    })



}]);
