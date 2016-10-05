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

  return {
    getPins: getPins,
    populatePins: populatePins,
    postPin: postPin
  }

}]);
