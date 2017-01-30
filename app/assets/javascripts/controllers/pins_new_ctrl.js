// ----------------------------------------
// PinsNewCtrl
// ----------------------------------------

Crudangles.controller('PinsNewCtrl',
  ['$scope', '$state', 'pins',
  function($scope, $state, pins) {

    $scope.createPin = function() {
      pins.create($scope.pinParams)
        .then(function(response) {
          console.log(response);
          $scope.pinParams = {};
        }, function(response) {
          console.error(response);
        });
    };
  }])
