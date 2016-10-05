"use strict";
angular.module('app').controller('PinsShowCtrl', ['$scope', 'PinService','$stateParams', function($scope, PinService, $stateParams){

	var pinId = $stateParams.id;

	PinService.getPin(pinId).then(function(pin){
		$scope.pin = pin;
	});

}]);