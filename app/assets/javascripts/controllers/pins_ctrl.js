pin.controller('PinsCtrl', ['$scope', 'PinsService', 'pins', function($scope, PinsService, pins) {

  $scope.pins = PinsService.getPins();
  // console.log($scope.pins);
  
  $scope.createPin = function() {
    PinsService.createPin($scope.newPin);
  };

}]);