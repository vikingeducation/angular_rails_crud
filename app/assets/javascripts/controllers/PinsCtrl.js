app.controller("PinsCtrl", ["$scope", "Pins", function($scope, Pins) {

  $scope.pins = Pins.all().$object;

  console.log("here's the controller")

}])