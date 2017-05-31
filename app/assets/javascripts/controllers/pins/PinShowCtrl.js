MyApp.controller('PinShowCtrl', ['$scope', 'pin', 'PinService', '$state', '$rootScope',
  function($scope, pin, PinService, $state, $rootScope){

  $scope.pin = pin;

  $scope.destroyPin = function(){
    PinService.destroyPin( $scope.pin.id )
      .then(function(response){
        $state.go('pins.index');
        $rootScope.$broadcast('pin.deleted');
      })
  };

}]);
