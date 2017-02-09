App.factory("PinService", ['Restangular', function(Restangular){
  var PinService = {};



  // PinService.create = function(pinParams){
  //   return Restangular.all('pins').post({
  //     pin: {
  //       item_name: pinParams.item_name,
  //       description: pinParams.description
  //     }
  //   })
  // };

  PinService.all = function(){
    return Restangular.all('pins').getList().$object;
  };

  return PinService;
}]);
