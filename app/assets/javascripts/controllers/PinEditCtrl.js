app.controller("PinEditCtrl", ["$scope", "Pins", "$stateParams", "$state", "Restangular", function($scope, Pins, $stateParams, $state, Restangular) {

  new Promise

  Pins.find($stateParams.id).then(function(response) {
    $scope.pin = response.data
    console.log($scope.pin)
    $scope.newPin = {}
    $scope.newPin.item_name = $scope.pin.item_name
    $scope.newPin.buy_sell = $scope.pin.buy_sell
    $scope.newPin.description = $scope.pin.description
    $scope.newPin.user_id = $scope.pin.user_id
    console.log($scope.newPin)
  })

  $scope.editPin = function() {
    Pins.update($scope.newPin)
  }

  $scope.deletePin = function(){
    $scope.pin.remove().then( function(){
      return $state.go('pins');
    });
  };

}]);
