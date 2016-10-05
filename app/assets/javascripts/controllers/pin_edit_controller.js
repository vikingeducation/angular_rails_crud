app.controller('PinEditCtrl',
  ['$scope', '$stateParams', 'PinService', 'pin', '$state',
  function($scope, $stateParams, PinService, pin, $state) {

    $scope.pinParams = {};

    console.log('you are editing pin controller');
    $scope.pin = pin;


    $scope.updatePin = function () {
      PinService.editPin($scope.pin, $scope.pinParams).then( function() {
        $state.go("pins.show", {id: $scope.pin.id});
      });
    };

    

}]);
