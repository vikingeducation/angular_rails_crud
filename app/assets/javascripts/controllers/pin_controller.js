pinboard.controller('PinCtrl', [ "$scope", "_", 'Restangular', function($scope, _, Restangular) {


  $scope.pins = Restangular.all('pins').getList().$object;



}]);
