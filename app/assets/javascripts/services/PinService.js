MyApp.factory('PinService', ['Restangular', function(Restangular){
  var service = {};

  service.all = function(){
    return Restangular.all('pins').getList();
  };

  service.getPin = function(pinId){
    return Restangular.one('pins', pinId).get();
  };

  return service;
}]);
