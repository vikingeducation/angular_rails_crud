pinApp.controller('pinsCtrl',
  ['$scope', 'Restangular',
  function($scope, Restangular, pins){

  $scope.hello = "Hello Ang world";

  $scope.pins = pins;

}]);