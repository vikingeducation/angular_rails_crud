app.factory("pinService", ["Restangular", function(Restangular) {
  var getAllPins = function(){
    return Restangular.all("pins").getList();
  };

  var createPin = function(data){
    return Restangular.all("pins").post(data);
  };

  var getPin = function(id) {
    return Restangular.one('pins', id).get();
  };

  var updatePin = function(pin) {
    // return Restangular.one('pins', id).get();
    var data = {
      pin: {
        description: pin.description,
        item_name: pin.item_name,
        true_false: pin.true_false
      }
    };
    return pin.patch(data);
  };


  return {
    getAllPins: getAllPins,
    createPin: createPin,
    getPin: getPin,
    updatePin: updatePin
  };
}]);
