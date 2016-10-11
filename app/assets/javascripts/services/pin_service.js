app.factory("pinService", ['Restangular', function(Restangular){

  var service = {};

  
  service.getPins = function(){
    return Restangular.all('pins').getList();
  };


  return service;
}]);