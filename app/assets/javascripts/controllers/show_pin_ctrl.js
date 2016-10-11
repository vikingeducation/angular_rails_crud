app.controller("ShowPinCtrl", ['$scope', 'pinService', '$stateParams', '$state', function($scope, pinService, $stateParams, $state){

  
  $scope.pin = pinService.getPin($stateParams.id).$object;

  $scope.deletePin = function(){
    pinService.deletePin($scope.pin);

    $state.go("pins");
  };


}]);