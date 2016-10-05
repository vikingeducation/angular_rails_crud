app.controller("pinsEditCtrl", ['$scope', "pinService", "$stateParams", "$state", function($scope, pinService, $stateParams, $state){

  $scope.pin = pinService.getPin($stateParams.id).$object;
  console.log($scope.pin);


  $scope.updatePin = function() {
    pinService.updatePin($scope.pin);
    //add brodcast?
    $state.go("main.pins");
  };

}]);
