MyApp.controller('PinIndexCtrl', ['Restangular', '$scope', 'pins', 'PinService', '$rootScope',
  function(Restangular, $scope, pins, PinService, $rootScope){

  $scope.$on('pin.deleted', function(){
    $scope.pins = PinService.all();
  });

  $scope.pins = pins;

  $scope.createPin = function(formData){
    PinService.createPin(formData)
      .then(function(pinResponse){
        $scope.pins.push( pinResponse );
        $scope.formData = {};
      })
  };

  $scope.destroyPin = function(pinId){
    PinService.destroyPin( pinId )
      .then(function(response){
        $rootScope.$broadcast('pin.deleted');
      })
  };

}]);
