app.factory("Pins", ["Restangular", function(Restangular) {


  var Pins = {}


  Pins.all = function() {
    return Restangular.all("pins").getList()
  }

  return Pins

}])