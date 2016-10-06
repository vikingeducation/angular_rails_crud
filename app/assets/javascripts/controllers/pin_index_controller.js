app.controller('PinIndexCtrl',
  ['$scope', 'PinService', 'pinsFromAPI',
  function($scope, PinService, pinsFromAPI) {
    $scope.myForm = {};
    $scope.pins = pinsFromAPI;

    $scope.submitForm = function() {
      PinService.createPin($scope.myForm).then(function() {
        console.log('pin was created');
      });
    };

}]);
