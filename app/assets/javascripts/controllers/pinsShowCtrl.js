fullCRUD.controller('pinsShowCtrl', 
  ["$scope", 'pin', 'pinService',
  function($scope, pin, pinService) {

    $scope.pin = pin;

  }])