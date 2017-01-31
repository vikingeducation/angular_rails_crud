// ----------------------------------------
// PinsIndexCtrl
// ----------------------------------------

Crudangles.controller('PinsIndexCtrl',
  ['$scope', '$state', 'PinService', '$rootScope',
  function($scope, $state, PinService, $rootScope) {
    $scope.pins = PinService.getPins().$object;

    $scope.removePin = function(id) {
      PinService.deletePin(id);
      $rootScope.$broadcast('pins.changed');
    };

    $scope.$on('pins.changed', function(){
      $scope.pins = PinService.getPins().$object;
    })

  }]);

