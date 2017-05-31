MyApp.controller('PinEditCtrl', ['$scope', 'pin', '$state', function($scope, pin, $state){
  $scope.pin = pin;

  $scope.updatePin = function(){
    $scope.pin.put()
      .then(function(pinResponse){
        console.log('pinResponse', pinResponse)
        $state.go('pins.show', { id: pinResponse.id })
      })
  };

}]);
