"use strict";
angular.module('app').controller('PinsEditCtrl', ['$scope', 'PinService','$stateParams', '$state', function($scope, PinService, $stateParams, $state){

	var pinId = $stateParams.id;

	PinService.getPin(pinId).then(function(pin){
		$scope.formData = pin;
    $scope.pin = pin;
	});

	$scope.edit = function(){
    $scope.pin.edit($scope.formData);
    $state.go("pins.show", {id: $scope.pin.id});
	};

}]);