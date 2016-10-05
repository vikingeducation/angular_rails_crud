"use strict";
angular.module('app').controller('PinsEditCtrl', ['$scope', 'PinService','$stateParams', function($scope, PinService, $stateParams){

	var pinId = $stateParams.id;

	PinService.getPin(pinId).then(function(pin){
		$scope.formData = pin;
	});

	$scope.editPin = function(){
		PinService.editPin($scope.formData);
	};

}]);