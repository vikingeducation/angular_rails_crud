pinBoard.controller('PinsCtrl', 
	['$scope', 'pins', 'pinService',
	function($scope, pins, pinService) {
		$scope.pins = pins;

		$scope.newPin = {buy_sell: 'true'};

		$scope.createPin = function(valid) {
			if (valid) {
				pinService.createPin($scope.newPin)
					.then(function(pin) {
						console.log(pin);
						$scope.newPin = {buy_sell: 'true'};
					})
			}
		}

	}])