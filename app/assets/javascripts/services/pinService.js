app.factory("pinService", ["Restangular", function(Restangular) {
  var getAllPins = function(){
    return Restangular.all("pins").getList();
  };

  var createPin = function(data){
    return Restangular.all("pins").post(data);
  };

  var getPin = function(id) {
    return Restangular.one('pins', id).get();
  }

  var updatePin = function(pin) {
    return pin.put();
  }


  return {
    getAllPins: getAllPins,
    createPin: createPin,
    getPin: getPin,
    updatePin: updatePin
  };
}]);
