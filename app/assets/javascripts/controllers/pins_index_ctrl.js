// ----------------------------------------
// PinsIndexCtrl
// ----------------------------------------

Crudangles.controller('PinsIndexCtrl',
  ['$scope', 'pins',
  function($scope, pins) {
    $scope.pins = pins;
    console.log(pins[0]);
  }]);

