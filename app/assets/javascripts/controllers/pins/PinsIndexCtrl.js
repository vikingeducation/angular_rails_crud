crudpin.controller('PinsIndexCtrl',
  ['$scope', 'Restangular', 'pins', 'loginService',
  function($scope, Restangular, pins, loginService) {

    $scope.currentUser = loginService.currentUser;

    $scope.pins = pins;

    $scope.processForm = function(valid) {
      if (valid) {
        Restangular.all('pins').post($scope.newPin)
          .then( $scope.addPinToIndex );
      };
    };

    $scope.addPinToIndex = function(response) {
      $scope.newPin.user = $scope.currentUser;
      $scope.newPin.created_at = response.created_at;
      $scope.pins.push($scope.newPin);;
      $scope.newPin = {};
    };

    $scope.delete = function(pin) {
      pin.remove().then( function() {
        var index = $scope.pins.indexOf(pin);
        if (index > -1) $scope.pins.splice(index, 1);
      });
    };

}])