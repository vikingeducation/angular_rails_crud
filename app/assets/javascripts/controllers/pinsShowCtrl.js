pinApp.controller('pinsShowCtrl',
  ['$scope', 'Restangular', 'pin', '$state',
  function($scope, Restangular, pin, $state) {

    $scope.pin = pin;

    $scope.updatePin = function(){

      Restangular.one('pins', pin.id).get().then(function(pin){

        pin.item_name = $scope.pin.item_name;
        pin.buy_sell = $scope.pin.buy_sell;
        pin.description = $scope.pin.description;

        pin.put();

        $state.go('pins.show', {id: pin.id });
      });

    };

    $scope.deletePin = function(id){
      Restangular.one('pins', id).get().then( function(pin){
        console.log(pin);
        pin.remove().then(function(){

          $state.go('pins.index');

        });
      });
    };

}]);