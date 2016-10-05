app.controller("PinsCtrl", ["$scope", "Pins", function($scope, Pins) {

  $scope.pins = Pins.all();

  $scope.createPin = function(){
    $scope.pins.create($scope.form)
  };


}]);
