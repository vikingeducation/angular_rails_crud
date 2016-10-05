app.controller('PinShowCtrl',
  ['$scope', '$stateParams', 'PinService', 'pin', '$state',
  function($scope, $stateParams, PinService, pin, $state) {
    console.log('you are show pin controller');
    $scope.pin = pin;

    $scope.destroy = function() {
      PinService.destroyPin($scope.pin, $scope.pinParams).then( function() {
        $state.go("pins");
      });
    };

}]);
