pin.factory('PinsService', ['Restangular', function(Restangular) {
  var _pins = [];

  var pinsService = {};

  pinsService.all = function() {
    return Restangular.all('pins').getList().then(function(response){
      console.log(response)
      return angular.copy(_pins, response);
    });
  };


  return pinsService;
}]);