pinboard.controller('PinsShowCtrl', ['$scope', '$stateParams', '$state', 'pin', function($scope, $stateParams, $state, pin) {

  $scope.pin = pin;

  $scope.deletePin = function() {
    $scope.pin.remove();
    $state.go('pins.index');
  };
}])