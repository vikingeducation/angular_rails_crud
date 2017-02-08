App.controller('PinsCtrl', ['$scope', 'Restangular', '$stateParams',
                            function($scope, Restangular, $stateParams){

  $scope.pins = Restangular.all("pins").getList().$object;
  $scope.id = $stateParams.id;
}]);
