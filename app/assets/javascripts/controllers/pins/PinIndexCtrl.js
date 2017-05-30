MyApp.controller('PinIndexCtrl', ['Restangular', '$scope', 'pins',
  function(Restangular, $scope, pins){

  $scope.pins = pins;

  $scope.createPin = function(formData){
     Restangular.all('pins').post({
      pin: {
        description: formData.description,
        item_name: formData.itemName,
        buy_sell: Boolean( formData.buySell ),
        user_id: 4 //temp until devise is hooked up
      }
    })

  };

}]);
