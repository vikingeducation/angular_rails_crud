app.controller("PinShowCtrl", ["$scope", "Pins", "$stateParams", function($scope, Pins, $stateParams) {

  $scope.pin = Pins.find($stateParams.id);

  $scope.deletePin = function(){
    $scope.pin.remove().then( function(){
      return $state.go('pins');
    });
  };


}])
