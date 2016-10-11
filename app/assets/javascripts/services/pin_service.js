app.factory("pinService", ['Restangular', function(Restangular){

  var service = {};

  
  service.getPins = function(){
    return Restangular.all('pins').getList();
  };

  service.createPin = function(formData){
    var pin = { pin: formData };
    return Restangular.all("pins").post(pin);
  }


  return service;
}]);