app.factory("pinService", ['Restangular', function(Restangular){

  var service = {};

  
  service.getPins = function(){
    return Restangular.all('pins').getList();
  };

  service.createPin = function(formData){
    var pin = { pin: formData };
    return Restangular.all("pins").post(pin);
  };

  service.getPin = function(id){
    return Restangular.one('pins', id).get();
  };


  service.editPin = function(pin, form){
    var pinData = { pin: form };

    return pin.patch(pinData);
  };

  service.deletePin = function(pin){
    pin.remove();
  }


  return service;
}]);