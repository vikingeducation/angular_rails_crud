var app = angular.module('app', ['ui.router', 'restangular', 'Devise']);

app.factory('_', [
  '$window',
  function($window) {
    return $window._;
  }
]);

app.config([
  "$httpProvider",
  function($httpProvider) {
    var token = $('meta[name=csrf-token]').attr('content');
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = token;
  }
]);

// config for restangular
app.config([
  'RestangularProvider',
  function(RestangularProvider) {

    RestangularProvider.setBaseUrl('/api/v1');
    RestangularProvider.setRequestSuffix('.json');
    RestangularProvider.setDefaultHttpFields({"content-type": "application/json"});
  }
]);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/pins');

    $stateProvider.state('main', {
      abstract: true,
      views: {
        'users@': {
          templateUrl: "/templates/users/index.html",
          controller: "UsersCtrl"
        }
      }
    })
    .state('main.pins', {
      url: '/pins',
      views: {
        'pins@': {
          templateUrl: "/templates/pins/index.html",
          controller: "pinsIndexCtrl"
        },
        'new@main.pins': {
          templateUrl: "/templates/pins/new.html",
          controller: "pinsNewCtrl"
        }
      }
    })
    .state('main.pin', {
      url: '/pin/:id',
      views: {
        'pins@': {
          templateUrl: "/templates/pins/show.html",
          controller: 'pinsShowCtrl'
        }
      }
    })
    .state('main.pin.edit', {
      url: '/edit',
      views: {
        'pins@': {
          templateUrl: "/templates/pins/edit.html",
          controller: "pinsEditCtrl"
        }
      }
    })

  }
]);
