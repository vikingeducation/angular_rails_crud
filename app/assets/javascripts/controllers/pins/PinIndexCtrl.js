MyApp.controller('PinIndexCtrl', ['Restangular', '$scope', 'pins',
  function(Restangular, $scope, pins){

  $scope.pins = pins;
  $scope.testing = 'hee ya';

}]);
