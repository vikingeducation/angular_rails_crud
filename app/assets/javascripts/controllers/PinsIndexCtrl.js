"use strict";
angular.module('app').controller('PinsIndexCtrl', ['$scope', 'PinService', function($scope, PinService){

	$scope.pins = PinService.getPins().$object;

	$scope.$on('pin.created', function(){
		PinService.getPins().then(function(pins){
			angular.copy(pins, $scope.pins);
		});
	});

}]);