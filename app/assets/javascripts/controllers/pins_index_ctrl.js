PinBoard.controller('PinsIndexCtrl', ['$scope', 'pinsList', 'PinService', function($scope, pinsList, PinService) {

  $scope.pins = pinsList;

  $scope.formData = {};

  $scope.$on('pins.create', function(){
    angular.copy(PinService.populatePins(), $scope.pins);
  });

  $scope.createPin = function(){
    $scope.formData.user_id = 1;
    PinService.postPin($scope.formData);
    $scope.formData = {};
  };

}]);
