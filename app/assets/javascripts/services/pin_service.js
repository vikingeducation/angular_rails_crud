PinBoard.factory('PinService', ['Restangular', function(Restangular) {

  var _pins = [];

  var populatePins = function() {
    return Restangular.all('pins').getList()
      .then(function(pins) {
        return angular.copy(pins, _pins);
      });
  };

  var getPins = function() {
    if (_pins.length) {
      return _pins;
    } else {
      return populatePins();
    }
  };

  return {
    getPins: getPins,
    populatePins: populatePins
  }

}]);
