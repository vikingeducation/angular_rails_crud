pinboard.controller('PinsEditCtrl', ['$scope', '$state', 'pin', 'PinsAPI',
  function($scope, $state, pin, PinsAPI){

  $scope.editPin = pin;
  $scope.buySellOptions = {
    'I want to buy': true,
    'For Sale': false
  };

  $scope.update = function(){
    PinsAPI.update($scope.editPin)
      .then(function(pin){
        $state.go('pins.show', {id: pin.id});
      });
  };

}]);