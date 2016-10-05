pin.controller('PinsShowCtrl', ['$scope', 'PinsService', 'pins', '$stateParams', function($scope, PinsService, pins, $stateParams) {

  $scope.pins = pins;
  $scope.pin = PinsService.find($stateParams.id).$object;

  console.log($scope.pin);

  

}]);