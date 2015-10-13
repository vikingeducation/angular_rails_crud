crudpin.controller('PinsIndexCtrl',
  ['$scope', 'Restangular', 'pins',
  function($scope, Restangular, pins) {

    $scope.pins = pins;

    $scope.processForm = function(valid) {
      if (valid) {
        Restangular.all('pins').post($scope.newPin)
          .then( $scope.addPinToIndex );
      };
    };

    $scope.addPinToIndex = function(response) {
      $scope.newPin.user = response.user;
      $scope.newPin.created_at = response.created_at;
      $scope.pins.push($scope.newPin);
      $scope.newPin = {};
    };

}])