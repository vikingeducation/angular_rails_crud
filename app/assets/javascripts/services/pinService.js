fullCRUD.factory('pinService', 
  ["Restangular", '$stateParams',
  function(Restangular, $stateParams) {

    var pinService = {};

    pinService.create = function(newPin) {
      return Restangular.all('pins')
                        .post( { pin: { user_id: 40,
                                        item_name: newPin.item_name,
                                        description: newPin.description,
                                        buy_sell: JSON.parse(newPin.buy_sell) }})
    };

    pinService.update = function(pin, updatedPin) {
      return Restangular.one('pins', pin.id)
                        .patch( { pin: {user_id: pin.user_id,
                                        item_name: updatedPin.item_name,
                                        description: updatedPin.description,
                                        buy_sell: JSON.parse(updatedPin.buy_sell)} })
    }

    pinService.delete = function(pin) {
      return Restangular.one('pins', pin.id)
                        .remove( { id: pin.id } );
    }

    return pinService;


  }])