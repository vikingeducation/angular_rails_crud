fullCRUD.controller('pinsIndexCtrl', 
  ["$scope", 'pins', 'pinService',
  function($scope, pins, pinService) {

    $scope.pins = pins;

    $scope.createPin = function() {
      console.log($scope.newPin)
      pinService.create($scope.newPin)
                .then( function(response) {
                  $scope.pins.unshift(response);
                  $scope.newPin = {};
                })
    }

  }])