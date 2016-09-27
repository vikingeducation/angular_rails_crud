pinBoard.controller('PinEditCtrl', 
	['$scope', 'pin', 'pinService', '$state',
	function($scope, pin, pinService, $state) {

		$scope.pin = pin;
		$scope.pin.buy_sell = $scope.pin.buy_sell.toString();

		$scope.updatePin = function(valid) {
			if (valid) {
				pinService.updatePin(pin)
					.then(function(pin) {
						$state.go('pin.show', {id: pin.id});
					})
			}
		}

	}])