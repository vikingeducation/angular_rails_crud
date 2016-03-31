pinboard.controller('PinsShowCtrl', ['$scope', '$stateParams', 'pin', 'Restangular', function($scope, $stateParams, pin, Restangular) {

  $scope.pin = pin;
}])