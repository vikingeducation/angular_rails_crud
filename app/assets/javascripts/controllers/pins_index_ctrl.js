// ----------------------------------------
// PinsIndexCtrl
// ----------------------------------------

Crudangles.controller('PinsIndexCtrl',
  ['$scope', '$state', 'PinService', '$rootScope',
  function($scope, $state, PinService, $rootScope) {
    PinService.getPins().then( function(pins) {
      $scope.pins = pins;
    })

    $scope.removePin = function(pin) {
      PinService.deletePin(pin);
      PinService.getPins().then( function(pins) {
        angular.copy(pins,$scope.pins);
      })
    };

  }]);

