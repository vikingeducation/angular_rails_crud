app.controller("PinsCtrl", ["$scope", "Pins", function($scope, Pins) {

  $scope.pins = Pins.all().$object;

  $scope.createPin = function(){
    Pins.create($scope.form);
  };

  console.log("here's the controller");

}]);
