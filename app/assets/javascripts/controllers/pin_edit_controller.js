app.controller('PinEditCtrl',
  ['$scope', '$stateParams', 'PinService', 'pin',
  function($scope, $stateParams, PinService, pin) {

    $scope.pinParams = {};

    console.log('you are editing pin controller');
    $scope.pin = pin;


    $scope.updatePin = function () {
      PinService.editPin($scope.pin, $scope.pinParams).then( function() {
        console.log('pin was edited');
      });
    };



}]);
