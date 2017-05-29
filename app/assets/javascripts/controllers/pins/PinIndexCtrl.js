MyApp.controller('PinIndexCtrl', ['Restangular', '$scope', "pins",
  function($scope, pins, Restangular){

  $scope.pins = pins;
  $scope.testing = 'hee ya';

}]);
