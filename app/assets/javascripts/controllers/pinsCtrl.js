pinBoard.controller('PinsCtrl', 
	['$scope', 'pins', function($scope, pins) {
		$scope.pins = pins;
	}])