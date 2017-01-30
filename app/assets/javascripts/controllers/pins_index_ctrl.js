// ----------------------------------------
// PinsIndexCtrl
// ----------------------------------------

Crudangles.controller('PinsIndexCtrl',
  ['$scope', 'pins',
  function($scope, pins) {
    $scope.pins = pins;
  }]);

