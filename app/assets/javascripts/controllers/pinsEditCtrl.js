fullCRUD.controller('pinsEditCtrl', 
  ["$scope", 'pin', 'pinService', '$state',
  function($scope, pin, pinService, $state) {

    $scope.pin = pin;

    $scope.updatePin = function() {
      pinService.update($scope.pin, $scope.updatedParams)
                .then( function() {
                  $scope.updatedParams = {};
                  $state.go('pins.show', {id: $scope.pin.id} );
                })
    }

  }])