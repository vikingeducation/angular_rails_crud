PinBoard.controller('PinsIndexCtrl', ['$scope', 'pinsList', 'PinService', 'Auth', function($scope, pinsList, PinService, Auth) {

  $scope.pins = pinsList;

  $scope.formData = {};

  $scope.$on('pins.create', function(){
    angular.copy(PinService.populatePins(), $scope.pins);
  });

  $scope.removePin = function(pin) {
    PinService.removePin(pin);
  }

  Auth.currentUser().then(function(user) {
    $scope.currentUser = user;
  })

}]);
