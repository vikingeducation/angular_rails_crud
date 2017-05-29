MyApp.factory('PinService', ['Restangular', function(Restangular){
  var service = {};

  service.all = function(){
    return Restangular.all('pins').getList()
      // .then(function(response){
      //   return response;
      // })
  }

  return service;
}]);
