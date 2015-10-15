crudpin.controller('PinsShowCtrl',
  ['$scope', '$state', 'pin', 'loginService', 'Restangular',
  function($scope, $state, pin, loginService, Restangular) {

    $scope.currentUser = loginService.currentUser;

    $scope.pin = pin;

    $scope.delete = function(pin) {
      pin.remove().then( function() {
        $state.go('pins.index');
      });
    };

}]);