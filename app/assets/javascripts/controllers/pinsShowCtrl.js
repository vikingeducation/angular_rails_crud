pinApp.controller('pinsShowCtrl',
  ['$scope', 'Restangular', 'pin',
  function($scope, Restangular, pin) {

    $scope.pin = pin;

    $scope.updatePin = function(){

      // Restangular.one('pin', pin.id).put( JSON.stringify( { pin: $scope.pin } ) );

      Restangular.one('pins', pin.id).get().then(function(pin){
  
        pin.item_name = $scope.pin.item_name;
        pin.buy_sell = $scope.pin.buy_sell;
        pin.description = $scope.pin.description;

        pin.put();
      });

    };

}]);