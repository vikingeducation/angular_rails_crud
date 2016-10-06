"use strict";
angular.module('app', ['ui.router', "restangular", "Devise"]);


angular.module('app').factory('_' ['$window', function($window) {
  return $window._;
}]);

angular.module('app').config([
  "$httpProvider",
  function($httpProvider) {
    var token = $('meta[name=csrf-token]').attr('content');
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = token;
  }
]);

// config for restangular
angular.module('app').config([
  'RestangularProvider',
  function(RestangularProvider) {

    RestangularProvider.setBaseUrl('/api/v1');
    RestangularProvider.setRequestSuffix('.json');
    RestangularProvider.setDefaultHttpFields({"content-type": "application/json"});
  }
]);

angular.module('app').config([
  '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  		$urlRouterProvider.otherwise('/pins');

  		$stateProvider.state('pins', {
  			url: '/pins',
        abstract: true,
        views: {
          "content": {
            templateUrl: "templates/content"
          }
        },
        resolve: {
          currentUser: ['Auth', function(Auth){
            return Auth.currentUser()
            .then(function(user){
              return user;
            });
          }]
        }
  		})

      .state("pins.index", {
        url:"",
          views: {
            'pins': {
              templateUrl: "templates/pins/index.html",
              controller: 'PinsIndexCtrl'
            },

            "new-pin": {
            templateUrl: "templates/pins/new.html",
            controller: "PinsNewCtrl"
          }
        }
      })

      .state("pins.show", {
        url: "/:id",
        views: {
          "show-pin": {
            templateUrl: "templates/pins/show.html",
            controller: "PinsShowCtrl"
          }
        }
      })
      .state("pins.edit", {
        url: "/edit/:id",
        views: {
          "edit-pin": {
            templateUrl: "templates/pins/edit.html",
            controller: "PinsEditCtrl"
          }
        }
      });


  }]);
