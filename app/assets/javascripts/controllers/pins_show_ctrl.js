PinBoard.controller('PinsShowCtrl', ['$scope', 'PinService', 'pin', '$state', 'Auth', '$stateParams', function($scope, PinService, pin, $state, Auth, $stateParams) {

  $scope.pin = pin;
  $scope.removePin = function() {
    PinService.removePin($scope.pin);
    $state.go('pins.index');
  }

  Auth.currentUser().then(function(user) {
    $scope.currentUser = user;
  });



}]);
