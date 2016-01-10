app.controller('PinsDeleteCtrl', ['$scope', 'Restangular', 'pin', '$state', function($scope, Restangular, pin, $state) {

	$scope.deletePin = function(pin){
		Restangular.one('pins', pin.id ).remove();
	}

	$scope.pin = pin;

	$scope.deletePin(pin);
	$state.go('pins.index');

}]);