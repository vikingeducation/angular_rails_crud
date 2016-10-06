"use strict";
angular.module('app').controller('PinsNewCtrl', ['$scope', 'PinService', '$rootScope','currentUser', function($scope, PinService, $rootScope, currentUser){

	$scope.formData = {};
	$scope.formData.buy_sell = "buy";

	$scope.createPin = function(){
		PinService.create(currentUser, $scope.formData)
		.then(function(){
			$rootScope.$broadcast('pin.created');
		});
	};

}]);