app.controller("pinsIndexCtrl", ['$scope', "pinService", function($scope, pinService){

  $scope.pins = pinService.getAllPins().$object;

  $scope.$on('pin.create', function(){
    $scope.pins = pinService.getAllPins().$object;
  });
}]);
