MyApp.controller('PinShowCtrl', ['$scope', 'pin', 'PinService', '$state', '$rootScope',
  function($scope, pin, PinService, $state, $rootScope){

  $scope.pin = pin;

  $scope.destroyPin = function(){
    console.log( $scope.pin.id, '$scope.pin.id')
    PinService.destroyPin( $scope.pin.id )
      .then(function(response){
        console.log('response', response)
        $state.go('pins.index');
        $rootScope.$broadcast('pin.deleted');
      })
  };

}]);
