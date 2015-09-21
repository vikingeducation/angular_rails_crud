pinApp.controller('pinsCtrl',
  ['$scope', 'Restangular', 'pins',
  function($scope, Restangular, pins) {

    $scope.pins = pins;


    $scope.createPin = function(){
      $scope.newPin.user_id = 40;
      Restangular.all('pins').post( JSON.stringify( { pin: $scope.newPin } ) );
      $scope.newPin = {};
    };

}]);