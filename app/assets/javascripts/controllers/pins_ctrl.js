pin.controller('PinsCtrl', ['$scope', 'PinsService', 'pins', function($scope, PinsService, pins) {

  $scope.pins = pins;
  console.log($scope.pins);

  $scope.newPin = {
    buy_sell: "false"
  };

  $scope.createPin = function() {
    PinsService.createPin($scope.newPin);
  };

}]);