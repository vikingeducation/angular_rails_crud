app.controller("PinEditCtrl", ["$scope", "Pins", "$stateParams", "$state", function($scope, Pins, $stateParams, $state) {

  $scope.pin = Pins.find($stateParams.id);

  $scope.deletePin = function(){
    $scope.pin.remove().then( function(){
      return $state.go('pins');
    });
  };

}]);
