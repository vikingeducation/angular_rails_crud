app.controller('PinIndexCtrl',
  ['$scope', 'PinService', 'pinsFromAPI',
  function($scope, PinService, pinsFromAPI) {

    $scope.pins = pinsFromAPI;

}]);
