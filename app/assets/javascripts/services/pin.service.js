app.factory('pinService',
  ['Restangular',
    function(Restangular) {

      var _pins = [];

      var all = function() {
        return Restangular.all('pins').getList().then(function (response) {
          _pins = response;
          // console.log(_pins);
          return _pins;
        });
      };

      var create = function(params) {
        console.log(params);
        var newPin = {
          pin: {
            item_name: params.item_name,
            description: params.description,
            buy_sell: params.buy_sell,
            user: {
              user_name: "Matsoft"
            }
          }

        };

        return Restangular.all('pins').post(newPin).then(
          function(pin) {
            pin.user = {
              username: "Matsoft"
            };
            _pins.unshift(pin);
            return pin;
          },
          function(response) {
            console.error("Error!" + response);
          }
        );
      };

      var getPin = function(id) {
        return Restangular.one('pins', id).get();
      };

      var updatePin = function updatePin(pin) {
        pin.save().then(function(pin){
          console.log("updated pin:", pin);
          for (var i = 0; i < _pins.length; i++) {
            if(_pins[i].id === pin.id) {
              _pins[i] = pin;
              break;
            }
          }
        }, function(response) {
          console.error("Pin update error!" + response);
        });
      };

      var deletePin = function(pin) {
        return pin.remove().then(
          function(pin) {
            for (var i = 0; i < _pins.length; i++) {
              if(_pins[i].id === pin.id) {
                _pins.splice(i, 1);
                break;
              }
            }
            return pin;
          },
          function(response) {
            console.error("Delete error!" + response);
          });
      };

      return {
        all: all,
        create: create,
        getPin: getPin,
        updatePin: updatePin,
        deletePin: deletePin
      };
}]);
