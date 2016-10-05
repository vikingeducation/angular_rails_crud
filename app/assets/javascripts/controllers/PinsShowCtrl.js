"use strict";
angular.module('app').controller('PinsShowCtrl', ['$scope', 'PinService','$stateParams', '$state', function($scope, PinService, $stateParams, $state){

	var pinId = $stateParams.id;

	PinService.getPin(pinId).then(function(pin){
		$scope.pin = pin;
	});

	$scope.delete = function(){
		$scope.pin.remove();
		$state.go('pins.index');
	};

}]);