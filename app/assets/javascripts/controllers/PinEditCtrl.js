app.controller("PinEditCtrl", ["$scope", "Pins", "$stateParams", function($scope, Pins, $stateParams) {

  $scope.pin = Pins.find($stateParams.id)

}])