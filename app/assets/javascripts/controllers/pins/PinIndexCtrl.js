MyApp.controller('PinIndexCtrl', ['Restangular', '$scope', 'pins', 'PinService',
  function(Restangular, $scope, pins, PinService){

  $scope.pins = pins;

  $scope.createPin = function(formData){
    PinService.createPin(formData)
      .then(function(pinResponse){
        $scope.pins.push( pinResponse );
        $scope.formData = {};
      })
  };

}]);
