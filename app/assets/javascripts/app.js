angular.module('pinboard', ['ui.router', 'restangular'])

.config(['RestangularProvider', function(RestangularProvider){
	RestangularProvider.setBaseUrl('/api/v1');
	RestangularProvider.setRequestSuffix('.json');
}])

.controller('TestCtrl', ['$scope', 'Restangular', function($scope, Restangular){
	$scope.hello = "It's me";
	$scope.pins = Restangular.all('pins').getList().$object;
}]);