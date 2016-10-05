app.factory("pinService", ["Restangular", function(Restangular) {
  var getAllPins = function(){
    return Restangular.all("pins").getList();
  };


  return {
    getAllPins: getAllPins
  };
}]);
