pinboard.controller('PinsShowCtrl', ['$scope', '$state', 'pin', 
  function($scope, $state, pin){

  $scope.pin = pin;

  $scope.delete = function(){
    pin.remove().then(function(){
      $state.go('pins.index');
    });
  };

}]);