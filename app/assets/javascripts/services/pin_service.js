app.factory('PinService',
['Restangular', '_', function(Restangular, _) {

  var PinService = {};
  var _pins;

  function _createPin(pinParams) {
    return Restangular.all('pins').post({
      title: pinParams.title,
      author: pinParams.author,
      body: pinParams.body
    });
  }

  PinService.populatePins = function () {
    return Restangular.all('pins').getList()
      .then(function(response) {
        console.log(response);
        _pins = response;
        return _pins;
      })
      .catch(function(reason) {
        console.log(reason);
      });
  };

  PinService.getPins = function () {
    if (_.isEmpty(_pins)) {
      return PinService.populatePins();
    } else {
      return _pins;
    }
  };

  return PinService;

}]);
