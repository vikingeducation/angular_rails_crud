pinboard.controller('pinsIndexCtrl',
                    [ '$scope', 'pins', 'Restangular',
                    function($scope, pins, Restangular){

  $scope.pins = pins;
  // $scope.newPin = {};
  // debugger
  $scope.user = pins[0].user;

  $scope.createPin = function(){

    Restangular.all('pins').post(
      { pin: { item_name:     $scope.newPin.item_name,
                buy_string:   $scope.newPin.buy_string,
                description:  $scope.newPin.description,
                user_id:      $scope.user.id }})
                          .then(function(createdPin){
                                $scope.pins.push(createdPin);
                                $scope.newPin = {};
                              });

  };

}]);