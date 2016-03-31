pinboard.controller('PinCtrl', [ "$scope", "$stateParams", "$location", "_", 'Restangular', function($scope, $stateParams, $location, _, Restangular) {

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
      Restangular.one('pins', $stateParams.id).put( { pin: {
        item_name: $scope.editPin.item_name,
        buy_sell: $scope.editPin.buy_sell,
        description: $scope.editPin.description,
        user_id: 1
      }})
      .then( function(updatedPin) {
        $scope.pins.push( updatedPin );
        $scope.editPin = {};
      })
      }
  }


}]);
