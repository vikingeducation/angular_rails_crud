// ----------------------------------------
// PinsNewCtrl
// ----------------------------------------

Crudangles.controller('PinsNewCtrl',
  ['$scope', '$state', 'PinService', '$rootScope',
  function($scope, $state, PinService, $rootScope) {
    $scope.pinParams = {
      item_name: "",
      buy_sell: true,
      description: "",
      user_id: 21,
    }
    $scope.createPin = function() {
      PinService.createPin($scope.pinParams)
        .then(function(response) {
          $rootScope.$broadcast('pins.changed');
          console.log(response);
          $scope.pinParams = {};
        }, function(response) {
          console.error(response);
        });
    };
  }])
