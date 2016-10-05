PinBoard.controller('PinsIndexCtrl', ['$scope', 'pinsList', 'PinService', function($scope, pinsList, PinService) {

  $scope.pins = pinsList;

  $scope.formData = {};

  $scope.$on('pins.create', function(){
    angular.copy(PinService.populatePins(), $scope.pins);
  });

  $scope.removePin = function(pin) {
    PinService.removePin(pin);
  }

}]);
