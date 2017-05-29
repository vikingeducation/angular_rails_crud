MyApp.factory('PinService', ['Restangular', function(Restangular){
  var service = {};

  service.all = function(){
    // return Restangular.all('pins').getList();
    return Restangular.all('pins').getList()
      .then(function(response){
        console.log(response, 'sda')
        return response.route;
      })
  }

  return service;
}]);
