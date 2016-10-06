"use strict";
angular.module('app').controller('PinsNewCtrl', ['$scope', 'PinService', '$rootScope', function($scope, PinService, $rootScope){

	$scope.formData = {};
	$scope.formData.buy_sell = "buy";

	$scope.createPin = function(){
		PinService.create($scope.formData)
		.then(function(){
			$rootScope.$broadcast('pin.created');
		});
	};

}]);