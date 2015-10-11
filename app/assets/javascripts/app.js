var crudpin = angular.module('crudpin', []);

crudpin.controller('TestCtrl',
  ['$scope',
  function($scope) {

    $scope.testString = 'Hello Angular';

  }]);