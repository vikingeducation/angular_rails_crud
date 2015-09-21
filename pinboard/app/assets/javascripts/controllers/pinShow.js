pinboard.controller('pinShowCtrl', ['$scope', 'pin', 'Restangular', function($scope, pin, Restangular){

  $scope.pin = pin;
  $scope.buying = { 'true':  "Want to Buy",
                    'false': 'For Sale'};

  $scope.updatePin = function(){

        $scope.pin.put();

        // Restangular.all('pin').post(
        //   { pin: {  item_name:    $scope.editPin.item_name,
        //             buy_string:   $scope.editPin.buy_string,
        //             description:  $scope.editPin.description }})

                          // .then(function(updatedPin){
                          //       $scope.pins.push(createdPin);
                          //       $scope.newPin = {};
                          //     });
  };


}]);