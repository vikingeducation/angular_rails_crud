pinboard.controller('PinsIndexCtrl', ['$scope', 'pins', 'Restangular', function($scope, pins, Restangular) {

  $scope.pins = pins;
}])