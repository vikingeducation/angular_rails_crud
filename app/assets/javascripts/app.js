var app = angular.module('pinboard', ['ui.router', 'restangular'])

.config(['RestangularProvider', function(RestangularProvider){
	RestangularProvider.setBaseUrl('/api/v1');
	RestangularProvider.setRequestSuffix('.json');
}])

.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
	$stateProvider
		
		.state('pins',{
			url: '/pins',
			templateUrl: '/templates/layout.html',
		})
		
		.state('pins.index',{
			url: '/index',
			templateUrl: '/templates/index.html',
			controller: 'PinsCtrl',
			resolve: {
				pins: ['Restangular', function(Restangular){
					return Restangular.all('pins').getList();
				}]
			}
		})

		.state('pins.show',{
			url: '/:id',
			templateUrl: '/templates/show.html',
			controller: 'PinsShowCtrl',
			resolve: {
				pin: ['Restangular', '$stateParams',
					function(Restangular, $stateParams){
						return Restangular.one('pins', $stateParams.id).get();
				}]
			}
		})

		.state('pins.edit',{
			url: '/:id/edit',
			templateUrl: '/templates/edit.html',
			controller: 'PinsEditCtrl',
			resolve: {
				pin: ['Restangular', '$stateParams',
					function(Restangular, $stateParams){
						return Restangular.one('pins', $stateParams.id).get();
				}]
			}
		})

		.state('pins.delete',{
			url: '/:id/delete',
			controller: 'PinsDeleteCtrl',
			resolve: {
				pin: ['Restangular', '$stateParams',
					function(Restangular, $stateParams){
						return Restangular.one('pins', $stateParams.id).get();
				}]
			}
		})

	$urlRouterProvider.otherwise('/pins');
}])

.run(function($rootScope){
	$rootScope.$on("$stateChangeError", console.log.bind(console));
});