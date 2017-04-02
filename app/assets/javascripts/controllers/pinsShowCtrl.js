fullCRUD.controller('pinsShowCtrl', 
  ["$scope", 'pin', 'pinService', '$state',
  function($scope, pin, pinService, $state) {

    $scope.pin = pin;

    $scope.delete = function() {
      console.log('delete triggered')
      pinService.delete(pin).then( function() {
        $state.go('pins');
      });
    }

  }])