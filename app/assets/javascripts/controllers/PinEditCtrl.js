app.controller("PinEditCtrl", ["$scope", "Pins", "$stateParams", "$state", "Restangular", function($scope, Pins, $stateParams, $state, Restangular) {

  $scope.pin = Pins.find($stateParams.id)

  $scope.newPin = {}
  $scope.newPin

  $scope.editPin = function() {
    Pins.update($scope.newPin)
  }

  $scope.deletePin = function(){
    $scope.pin.remove().then( function(){
      return $state.go('pins');
    });
  };

}]);
