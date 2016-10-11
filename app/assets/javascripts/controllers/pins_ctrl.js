app.controller("PinsCtrl", ['$scope', 'pinService', function($scope, pinService){

  $scope.pins = pinService.getPins().$object;

}]);