app.controller("EditPinCtrl", ['$scope', 'pinService', '$stateParams', '$state', function($scope, pinService, $stateParams, $state){

  
  $scope.pin = pinService.getPin($stateParams.id).$object;
  

  $scope.form = {};

  $scope.editPin = function(){
    pinService.editPin($scope.pin, $scope.form);

    $state.go("pins");
  };
}]);