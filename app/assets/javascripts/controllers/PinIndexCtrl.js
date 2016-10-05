app.controller("pinsIndexCtrl", ['$scope', "pinService", function($scope, pinService){

  $scope.pins = pinService.getAllPins().$object;
}]);
