pinBoard.controller('PinShowCtrl',
	['Restangular', '$scope', 'pin', '$state', 'pinService',
	function(Restangular, $scope, pin, $state, pinService) {

		$scope.pin = pin;

		$scope.deletePin = function(pin) {
			pinService.deletePin(pin)
				.then(function() {
					console.log('deleted');
					$state.go('pins');
				})
		}

	}])