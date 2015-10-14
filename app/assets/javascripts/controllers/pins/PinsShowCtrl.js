crudpin.controller('PinsShowCtrl',
  ['$scope', 'pin', 'loginService',
  function($scope, pin, loginService) {

    $scope.currentUser = loginService.currentUser;

    $scope.pin = pin;

}]);