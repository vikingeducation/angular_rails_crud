// ----------------------------------------
// PinsEditCtrl
// ----------------------------------------

Crudangles.controller('PinsEditCtrl',
  ['$scope', '$state', 'pin', 'PinService',
  function($scope, $state, pin, PinService) {

    // $scope.pinParams = {
    //   item_name: pin.item_name,
    //   buy_sell: pin.buy_sell,
    //   description: pin.description,
    //   id: pin.id,
    // };
    $scope.pinParams = pin;

    $scope.updatePin = function() {
      PinService.updatePin(pin, $scope.pinParams)
        .then(function(response) {
          $state.go('pins.show', {"id": pin.id});
        }, function(response) {
          console.error(response);
        });
    };
  }])
