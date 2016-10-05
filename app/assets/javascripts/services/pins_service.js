pin.factory('PinsService', ['Restangular', function(Restangular) {
  var _pins = [];

  var pinsService = {};

  pinsService.all = function() {
    return Restangular.all('pins').getList().then(function(response){
      console.log(response)
      return angular.extend(_pins, response.plain());
    });
  };

  pinsService.createPin = function(params) {
    Restangular.all('pins').post({
      pin: params
    }).then(function(response) {
      console.log("new pin")
      _pins.push(response);
    });
  };


  return pinsService;
}]);