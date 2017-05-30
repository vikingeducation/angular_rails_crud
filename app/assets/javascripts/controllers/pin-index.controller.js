app.controller('PinIndexCtrl',
  ['$scope', 'pinService', 'pins',
    function($scope, pinService, pins) {
      $scope.pins = pins;

      // $scope.pins = pinService.all;
      // console.log(pins);
      // console.log("pins in PinIndexCtrl are:");
      // console.log(pins);


}]);
