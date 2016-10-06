PinBoard.factory('PinService', ['Restangular', '$rootScope', function(Restangular, $rootScope) {

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

  var postPin = function(pinParams) {
    return Restangular.all('pins').post(pinParams)
      .then(function() {
        $rootScope.$broadcast('pins.create')
      })
  }

  var patchPin = function(pinParams, pin) {
    return pin.patch(pinParams).then(function() {
        return angular.copy(populatePins(), _pins)
      })
  }

  var find = function(id) {
    return Restangular.one('pins', id).get()
  }

  var removePin = function(pin) {
    pin.remove().then(function() {
        angular.copy(populatePins(), _pins)
      })
  }

  return {
    getPins: getPins,
    populatePins: populatePins,
    postPin: postPin,
    find: find,
    patchPin: patchPin,
    removePin: removePin
  }

}]);
