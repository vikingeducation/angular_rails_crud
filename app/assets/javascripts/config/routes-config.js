pinBoard.config(
	['$urlRouterProvider', '$stateProvider', 
	function($urlRouterProvider, $stateProvider) {

		$urlRouterProvider.otherwise('/');

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

	}])