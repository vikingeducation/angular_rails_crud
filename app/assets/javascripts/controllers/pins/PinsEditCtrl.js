crudpin.controller('PinsEditCtrl',
  ['$scope', '$state', '$stateParams', 'Restangular', 'pin',
  function($scope, $state, $stateParams, Restangular, pin) {

    $scope.editPin = pin;

    $scope.processForm = function(valid) {
      if (valid) {
        Restangular.one('pins', $stateParams.id).patch($scope.editPin)
          .then( $scope.redirectToShow );
      };
    };

    $scope.redirectToShow = function() {
      $state.go('pins.show', ({id: $stateParams.id}));
    }

}]);