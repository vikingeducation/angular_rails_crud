pinboard.controller('pinsIndexCtrl', [ '$scope', 'pins', 'Restangular',
                                        function($scope, pins, Restangular){

  $scope.pins = pins;

}]);