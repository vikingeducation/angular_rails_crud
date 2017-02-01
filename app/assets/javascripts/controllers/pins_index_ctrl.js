// ----------------------------------------
// PinsIndexCtrl
// ----------------------------------------

Crudangles.controller('PinsIndexCtrl',
  ['$scope', '$state', 'PinService', '$rootScope',
  function($scope, $state, PinService, $rootScope) {
    $scope.pins = [];

    PinService.getPins().then( function(pins) {
      angular.copy(pins,$scope.pins);
    })

    $scope.removePin = function(pin) {
      PinService.deletePin(pin)
        .then( function(pin) {
          PinService.getPins().then( function(pins) {
            angular.copy(pins,$scope.pins);
          });
        });
      };
  }]);

