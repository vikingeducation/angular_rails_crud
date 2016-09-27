pinBoard.config(
	['$urlRouterProvider', '$stateProvider', 
	function($urlRouterProvider, $stateProvider) {

		$urlRouterProvider.otherwise('/pins');

		$stateProvider
			.state('pins', {
				url: '/pins',
				resolve: {
					pins: ['pinService', function(pinService) {
						return pinService.getAll();
					}]
				},
				templateUrl: 'templates/pins/index.html',
				controller: 'PinsCtrl'
			})

			.state('pin', {
				url: '',
				abstract: true,
				template: '<div ui-view></div>'
			})
			.state('pin.show', {
				url:'/pin/:id',
				resolve: {
					pin: ['pinService', '$stateParams', function(pinService, $stateParams) {
						return pinService.getPin($stateParams.id);
					}]
				},
				templateUrl: 'templates/pins/show.html',
				controller: 'PinShowCtrl'

			})

			.state('pin.edit', {
				url: '/pin/:id/edit',
				resolve: {
					pin: ['pinService', '$stateParams', function(pinService, $stateParams) {
						return pinService.getPin($stateParams.id);
					}]
				},
				templateUrl: 'templates/pins/edit.html',
				controller: 'PinEditCtrl'
			})

	}])