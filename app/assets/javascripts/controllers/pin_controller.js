pinboard.controller('PinCtrl', [ "$scope", "$stateParams", "$location", 'Restangular', function($scope, $stateParams, $location, Restangular) {

  $scope.pins = Restangular.all( 'pins' ).getList().$object;

  $scope.showPin = Restangular.one( 'pins', $stateParams.id ).get().$object;

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

  $scope.updatePin = function(formIsValid) {
    if (formIsValid) {
      console.log($scope.showPin)
      console.log()
      var copy = Restangular.copy($scope.showPin);

      $scope.showPin.patch({ pin: {
        item_name: $scope.showPin.item_name,
        buy_sell: $scope.showPin.buy_sell,
        description: $scope.showPin.description,
        user_id: 1
      } })
      .then( function(updatedPin) {
        for (var i = 0; i < $scope.pins.length; i++) {
          if (updatedPin.id == $scope.pins[i].id) {
            $scope.pins.splice(i, 1, updatedPin);
          }
        }
      })
    }
  }


}]);
