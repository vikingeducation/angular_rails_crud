// ----------------------------------------
// PinsShowCtrl
// ----------------------------------------

Crudangles.controller('PinsShowCtrl',
  ['$scope', 'pin', '$state' ,'PinService',
  function($scope, pin, $state, PinService) {
    $scope.pin = pin;

    $scope.removePin = function(pin) {
      PinService.deletePin(pin);
      $state.go("pins.index");
    };

  }]);

