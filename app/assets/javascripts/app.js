pinApp = angular.module('pinApp', ['ui.router', 'restangular']);

pinApp.controller('TestCtrl', ['$scope', function($scope){

  $scope.hello = "Hello Ang world";

}]);