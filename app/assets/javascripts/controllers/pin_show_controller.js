app.controller('PinShowCtrl',
  ['$scope', '$stateParams', 'PinService', 'pin',
  function($scope, $stateParams, PinService, pin) {
    console.log('you are show pin controller')
    $scope.pin = pin;

    console.log(pin);

}]);
