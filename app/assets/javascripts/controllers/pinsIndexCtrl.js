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

    $scope.deletePin = function(id){
      Restangular.one('pins', id).get().then( function(pin){
        console.log(pin);
        pin.remove().then(function(){

          for(var i = 0 ; i < $scope.pins.length ; i++ ){
            if($scope.pins[i].id === pin.id){
              return $scope.pins.splice( i, 1 );
            }
          }

          

        });
    });
  };

}]);