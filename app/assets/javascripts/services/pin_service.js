app.factory('PinService',
['Restangular', '_', function(Restangular, _) {

  var PinService = {};
  var _pins;

  PinService.createPin = function(pinParams) {
    var trueFalse = (pinParams.buySell === "true");
    return Restangular.all('pins').post({
      item_name: pinParams.title,
      buy_sell: trueFalse,
      description: pinParams.description
    }).then( function(response) {
      _pins.unshift(response);
    });
  };

  PinService.populatePins = function () {
    return Restangular.all('pins').getList()
      .then(function(response) {
        _pins = response;
        return _pins;
      })
      .catch(function(reason) {
        console.log(reason);
      });
  };

  PinService.getPins = function() {
    if (_.isEmpty(_pins)) {
      return PinService.populatePins();
    } else {
      return _pins;
    }
  };

  PinService.findPins = function(id) {
    return Restangular.one("pins", id).get();
  };

  return PinService;

}]);
