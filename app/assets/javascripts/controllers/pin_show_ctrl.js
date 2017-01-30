// ----------------------------------------
// PinsShowCtrl
// ----------------------------------------

Crudangles.controller('PinsShowCtrl',
  ['$scope', 'pin',
  function($scope, pin) {
    $scope.pin = pin;
  }]);

