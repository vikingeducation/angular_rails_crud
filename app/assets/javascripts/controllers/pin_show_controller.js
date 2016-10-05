app.controller('PinShowCtrl',
  ['$scope', '$stateParams', 'PinService', 'pin',
  function($scope, $stateParams, PinService, pin) {

    $scope.pin = pin;

    console.log(pin);

}]);
