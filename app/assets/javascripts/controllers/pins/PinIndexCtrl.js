MyApp.controller('PinIndexCtrl', ['Restangular', '$scope', 'pins', 'PinService',
  function(Restangular, $scope, pins, PinService){

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



}]);
