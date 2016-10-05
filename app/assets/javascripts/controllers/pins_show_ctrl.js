pin.controller('PinsShowCtrl', ['$scope', '$state', 'PinsService', 'pins', '$stateParams', 'pin', function($scope, $state, PinsService, pins, $stateParams, pin) {

  $scope.pins = pins;
  $scope.pin = pin

  $scope.deletePin = function(){
    PinsService.deletePin($scope.pin);
  }
  

}]);