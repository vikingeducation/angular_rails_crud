pinBoard.factory('pinService', 
	['Restangular', function(Restangular) {

	_pins = [];

	var service = {};

	service.getAll = function() {
		Restangular.all('pins').getList()
			.then(function(pins) {
				angular.copy(pins, _pins);
			})
		return _pins;
	}

	service.createPin = function(pin) {
		pin.buySell = pin.buy_sell ? true : undefined;

		return Restangular.all('pins').post({
			pin
		})
		.then(function(pin) {
			_pins.unshift(pin);
		})
	}

	return service;

}])