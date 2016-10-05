PinBoard.controller('PinsShowCtrl', ['$scope', 'PinService', 'pin', '$state', function($scope, PinService, pin, $state) {

  $scope.pin = pin;
  $scope.removePin = function() {
    PinService.removePin($scope.pin);
    $state.go('pins.index');
  }
  
}]);
