MyApp.factory('PinService', ['Restangular', function(Restangular){
  var service = {};

  service.all = function(){
    return Restangular.all('pins').getList().$object;
  };

  service.getPin = function(pinId){
    return Restangular.one('pins', pinId).get();
  };

  service.createPin = function(formData){
     return Restangular.all('pins').post({
      pin: {
        description: formData.description,
        item_name: formData.itemName,
        buy_sell: Boolean( formData.buySell ),
        user_id: 4 //temp until devise is hooked up
      }
    })
  };

  // service.updatePin = function(pinId){
  //   return Restangular.one('pins', pinId).remove();
  // };

  service.destroyPin = function(pinId){
    return Restangular.one('pins', pinId).remove();
  };

  return service;
}]);
