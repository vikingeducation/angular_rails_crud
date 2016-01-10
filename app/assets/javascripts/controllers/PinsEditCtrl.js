app.controller('PinsEditCtrl', ['$scope', 'Restangular', 'pin', '$state', function($scope, Restangular, pin, $state) {

	
	$scope.pin = pin;

	$scope.info = {
		itemName: pin.item_name,
		buySell: (pin.buy_sell ? "buy": "sell"),
		description: pin.description
	}

	$scope.updatePin = function(){
		Restangular.one('pins', pin.id ).patch({ pin: { item_name: 	$scope.info.itemName,
																					buy_sell: 		($scope.info.buySell == 'buy' ? true : false),
																					description: 	$scope.info.description}})
													.then(function(updatedPin){
														// QUESTION: I couldn't get this to go back to the 
														// specific show page, how can I do that?
														$state.go('pins.index');
														$scope.newPin = {};
													})
	}

}]);