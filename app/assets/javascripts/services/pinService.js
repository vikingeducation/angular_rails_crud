app.factory("pinService", ["Restangular", function(Restangular) {
  var getAllPins = function(){
    return Restangular.all("pins").getList();
  };

  var createPin = function(data){
    return Restangular.all("pins").post(data);
  };


  return {
    getAllPins: getAllPins,
    createPin: createPin
  };
}]);
