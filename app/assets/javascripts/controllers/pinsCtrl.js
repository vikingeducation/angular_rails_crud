pinApp.controller('pinsCtrl',
  ['$scope', 'Restangular', 'pins',
  function($scope, Restangular, pins) {

    console.log("instantiated pins controller");

    $scope.pins = pins;


    $scope.createPin = function(){
      $scope.newPin.user_id = 54;
      Restangular.all('pins').post(
      JSON.stringify({pin: $scope.newPin})
      );
      $scope.newPin = {};
    };

}]);