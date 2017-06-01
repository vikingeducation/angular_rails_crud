app.controller('PinShowCtrl', ['$scope', '$stateParams', '$state', 'pinService', function($scope, $stateParams, $state, pinService) {

  pinService.getPin($stateParams.id).then(
    function (pin) {
      $scope.pin = pin;
    });

  $scope.deletePin = function() {
    pinService.deletePin($scope.pin).then(
      function() {
        $state.go('index');
      });
  };

}]);
