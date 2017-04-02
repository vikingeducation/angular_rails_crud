fullCRUD.factory('pinService', 
  ["Restangular",
  function(Restangular) {

    var pinService = {};

    pinService.create = function(newPin) {
      return Restangular.all('pins')
                        .post( { pin: { user_id: 40,
                                        item_name: newPin.item_name,
                                        description: newPin.description,
                                        buy_sell: JSON.parse(newPin.buy_sell) }})
    };



    return pinService;


  }])