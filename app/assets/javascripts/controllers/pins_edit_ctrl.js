PinBoard.controller('PinsEditCtrl', ['$scope', 'PinService', 'pin', '$stateParams', '$state', 'Auth', function($scope, PinService, pin, $stateParams, $state, Auth) {

  $scope.pin = pin;

  Auth.currentUser().then(function(user) {
    if (user.id !== pin.user.id) {
      $state.go('pins.index');
    }
  })

}]);
