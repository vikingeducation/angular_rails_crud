pinboard.factory('PinsAPI', ['Restangular', function(Restangular){
  
  var index = function(){
    return Restangular.all('pins').getList();
  };

  var show = function(id){
    return Restangular.one('pins', id).get();
  };

  var create = function(newPin){
    return Restangular.all('pins').post({ 
      pin: {
        item_name: newPin.itemname,
        buy_sell: newPin.buysell,
        description: newPin.description
      } 
    });
  };

  return {
    index: index,
    show: show,
    create: create,
  };

}]);