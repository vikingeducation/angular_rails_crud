app.controller('PinsCtrl', ['$scope', 'Restangular', 'pins', function($scope, Restangular, pins) {

	$scope.pins = pins;

	$scope.submitPin = function(){
		Restangular.all('pins').post({ pin: { item_name: 		$scope.newPin.itemName,
																					buy_sell: 		($scope.newPin.buySell == 'buy' ? true : false),
																					description: 	$scope.newPin.description}})
													.then(function(createdPin){
														$scope.pins.push(createdPin);
														$scope.newPin = {};
													})
	}


}]);