// ----------------------------------------
// PinService
// ----------------------------------------

Crudangles.factory('PinService',
  ['_', 'Restangular',
  function(_, Restangular) {

  var PinService = {};

  PinService.getPins = function(){
    return Restangular.all('pins').getList();
  };

  PinService.createPin = function(formData){
    var pin = { pin: formData };
    return Restangular.all("pins").post(pin);
  };

  PinService.getPin = function(id){
    return Restangular.one('pins', id).get();
  };


  PinService.updatePin = function(pin, formParams){
    var pinData = { pin: formParams };

    return pin.patch(pinData);
  };

  PinService.deletePin = function(pin){
    return pin.remove();
  }

  return PinService;

  }]);
