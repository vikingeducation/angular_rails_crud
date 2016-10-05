"use strict";
app.controller('PinsIndexCtrl', ['$scope', 'PinService', function($scope, PinService){
	$scope.pins = PinService.getPins().$object;
	console.log($scope.pins);
}]);