// ----------------------------------------
// PinService
// ----------------------------------------

Crudangles.factory('PinService',
  ['_', 'Restangular',
  function(_, Restangular) {

    // ----------------------------------------
    // Private
    // ----------------------------------------

    Restangular.extendCollection('pins', function(collection) {

      collection.all = _all;
      collection.find = _find;
      collection.refreshOne = _refreshOne;
      collection.refreshAll = _refreshAll;
      collection.create = _create;

      return collection;
    });

    var _pins;

    var _createPin = function(params) {
      return Restangular.all('pins').post({
        pin: {
          item_name: params.item_name,
          buy_sell: params.buy_sell,
          description: params.description,
          user_id: 15,  //change after adding devise
        }
      })
        .then(function(response) {
          _pins.then(function(pins) {
            pins.unshift(response);
          });
          return _pins;
        });
    };


    var _findPin = function(id) {
      id = parseInt(id);
      var result = _.find(_pins, function(pin) {
        if (pin.id === id) {
          return pin;
        }
      });
      console.log(result);
      return result ? result : PinService.refreshOne(id);
    };


    var _refreshOne = function(id) {
      var index = _.findIndex(_pins, function(pin) {
        return pin.id === id;
      });

      if (index >= 0) {
        return _pins[index];
      } else {
        return _pins[index] = Restangular.one('pins', id).get();
      }
    };


    var _refreshAll = function() {
      if (_pins) {
        Restangular.all('pins').getList()
          .then(function(response) {
            angular.copy(response, _pins);
          });
      } else {
        _pins = Restangular.all('pins').getList();
      }
      return _pins;
    };


    var _all = function() {
      return PinService.refreshAll();
    };


    var _find = function(id) {
      return _findPin(id);
    };


    var _create = function(params) {
      return _createPin(params);
    };

    // ----------------------------------------
    // Public
    // ----------------------------------------

    var PinService = {};


    PinService.all = _all;
    PinService.find = _find;
    PinService.refreshOne = _refreshOne;
    PinService.refreshAll = _refreshAll;
    PinService.create = _create;

    return PinService;

  }]);
