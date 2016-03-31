pinboard.controller('PinCtrl', [ "$scope", "_", 'Restangular', function($scope, _, Restangular) {


  $scope.pins = Restangular.all('pins').getList().$object;

  $scope.createPin = function(formIsValid) {
    if (formIsValid) {
      Restangular.all('pins').post( { pin: {
        item_name: $scope.newPin.item_name,
        buy_sell: $scope.newPin.buy_sell,
        description: $scope.newPin.description,
        user_id: 1
      }})
      .then( function(createdPin) {
        $scope.pins.push( createdPin );
        $scope.newPin = {};
      })
      } 
    }


}]);
