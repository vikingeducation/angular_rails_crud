pinApp.controller('pinsCtrl',
  ['$scope', 'Restangular', 'pins',
  function($scope, Restangular, pins) {

    console.log("instantiated pins controller")

    $scope.pins = pins

}]);