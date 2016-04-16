pinboard.controller('PinsIndexCtrl', ['$scope', 'pins',
  function($scope, pins){

  console.log('test');
  $scope.pins = pins;
  $scope.testValue = "hello";

}]);