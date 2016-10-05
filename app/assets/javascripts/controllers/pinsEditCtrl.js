app.controller("pinsEditCtrl", ['$scope', "pinService", "$stateParams", function($scope, pinService, $stateParams){

  $scope.pin = pinService.getPin($stateParams.id).$object
  $scope.updatePin = function() {
    pinService.updatePin($scope.pin);
    //add brodcast?
  }

}]);
