pinApp.controller('pinsIndexCtrl',
  ['$scope', 'Restangular', 'pins',
  function($scope, Restangular, pins) {

    $scope.pins = pins;


    $scope.createPin = function() {
      $scope.newPin.user_id = 54;
      // $scope.newPin.buy_sell = ( $scope.newPin.buy_sell === "true");
      var newPin = Restangular.all('pins').post( JSON.stringify( { pin: $scope.newPin } ) ).$object;
      $scope.pins.push(newPin);
      $scope.newPin = {};
    };

}]);