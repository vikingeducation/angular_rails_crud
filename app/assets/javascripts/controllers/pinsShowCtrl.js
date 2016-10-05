app.controller("pinsShowCtrl", ['$scope', "pinService", "$stateParams", function($scope, pinService, $stateParams){

  $scope.pin = pinService.getPin($stateParams.id).$object

}]);
