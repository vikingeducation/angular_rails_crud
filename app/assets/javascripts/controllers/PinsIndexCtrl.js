"use strict";
angular.module('app').controller('PinsIndexCtrl', ['$scope', 'PinService', function($scope, PinService){

	$scope.pins = PinService.getPins().$object;


}]);