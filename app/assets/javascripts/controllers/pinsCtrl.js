fullCRUD.controller('pinsCtrl', 
  ["$scope", 'pins',
  function($scope, pins) {

    $scope.pins = pins;

  }])