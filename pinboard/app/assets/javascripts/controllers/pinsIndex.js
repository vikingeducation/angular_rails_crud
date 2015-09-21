pinboard.controller('pinsIndexCtrl',
                    [ '$scope', 'pins', 'Restangular',
                    function($scope, pins, Restangular){

  $scope.pins = pins;
  $scope.newPin = {};
  $scope.user = pins[0].user;

  $scope.createPin = function(){

    Restangular.all('pins').post(
          { pin: {  item_name:    $scope.newPin.item_name,
                    buy_string:   $scope.newPin.buy_string,
                    description:  $scope.newPin.description,
                    user_id:      $scope.user.id }})

                          .then(function(createdPin){
                                $scope.pins.push(createdPin);
                                $scope.newPin = {};
                              });

  };

  $scope.deletePin = function(pin){
    var idx = pins.indexOf(pin);
    pin.delete().then(function(){
      pins.splice(idx, 1);
    });
  };

}]);