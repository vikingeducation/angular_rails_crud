pinboard.controller('PinsEditCtrl', ['$scope', '$stateParams', '$state', 'pin', function($scope, $stateParams, $state, pin) {

  $scope.pin = pin;
  $scope.buySellOptions = [
    { value: true, label: 'Buy' },
    { value: false, label: 'For Sale' },
  ];

  $scope.updatePin = function() {
    if ($scope.editPinForm.$valid) {
      $scope.pin.save();
      $state.go('pins.show', {id: $stateParams.id});
    }
  };
}])