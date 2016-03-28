// ----------------------------------------
// Router
// ----------------------------------------

Pinnacle.config(['$urlRouterProvider', '$stateProvider',
  function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/pins');

    $stateProvider
      .state('pins', {
        abstract: true,
        url: '/pins',
        template: '<div ui-view></div>',
        resolve: {
          pins: ['Restangular', function(Restangular) {
            console.log('Getting pins...');
            return Restangular.all('pins').getList();
          }],
          pinTypes: ['Restangular', function(Restangular) {
            console.log('Getting pin types...');
            return Restangular.all('pin_types').getList();
          }]
        }
      })
      .state('pins.index', {
        url: '',
        templateUrl: '/templates/pins/index.html',
        controller: 'PinsCtrl'
      })
      .state('pins.show', {
        url: '/:id',
        templateUrl: '/templates/pins/show.html',
        controller: 'PinsCtrl'
      })
      .state('pins.edit', {
        url: '/:id/edit',
        templateUrl: '/templates/pins/edit.html',
        controller: 'PinsCtrl'
      });

  }]);

