pin.factory('PinsService', ['Restangular', '$state', function(Restangular, $state) {
  var _pins = [];

  var pinsService = {};

  pinsService.all = function() {
    return Restangular.all('pins').getList().then(function(response){
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

  pinsService.find = function(id) {
    return Restangular.one('pins', id).get();
  };

  pinsService.editPin = function(params, pin) {
    pin.item_name = params.item_name;
    pin.description = params.description;
    pin.buy_sell = params.buy_sell;
    pin.save().then(function(response){
      pinsService.all();
    });
  };

  pinsService.deletePin = function(pin) {
    return pin.remove().then(function(response){
      pinsService.all()
      $state.go('pins.index');
    })
  }


  return pinsService;
}]);