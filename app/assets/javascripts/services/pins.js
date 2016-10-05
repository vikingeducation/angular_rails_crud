app.factory("Pins", ["Restangular", function(Restangular) {


  var _pins;
  var Pins = {};

  Pins.find = function(id) {
    var pin = Restangular.one("pins", id).get().$object
    return pin
  }


  Pins.all = function() {
    _pins = Restangular.all("pins").getList().$object
    return _pins;
  };

  var _createPin = function(params){
    return Restangular.all('pins').post({
      pin: {
        item_name: params.title,
        buy_sell: params.buySell,
        description: params.description,
        user_id: 1              //hard-coded
      }
    })
      .then(function(response) {
        console.log(response);
        _pins.unshift(response);
        return _pins;
      });
  };

  Restangular.extendCollection('pins', function(collection){
    collection.create = _createPin;
    return collection;
  });

  return Pins;
}]);
