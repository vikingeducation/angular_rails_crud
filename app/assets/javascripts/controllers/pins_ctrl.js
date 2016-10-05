pin.controller('PinsCtrl', ['$scope', 'PinsService', 'pins', function($scope, PinsService, pins) {
  console.log(pins)
  $scope.pins = pins.$object;
  console.log($scope.pins)
}]);