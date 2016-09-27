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

	service.getPin = function(id) {
		return Restangular.one('pins', id).get();
	}

	service.updatePin = function(pin) {
		return pin.put();
	}

	service.deletePin = function(pin) {
		return pin.remove();
	}

	service.createPin = function(pin) {

		return Restangular.all('pins').post({
			pin
		})
		.then(function(pin) {
			_pins.unshift(pin);
		})
	}

	return service;

}])