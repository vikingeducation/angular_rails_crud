var pinboard = angular.module('pinboard', ['ui.router', 'restangular']);

pinboard.controller('testCtrl', ['$scope', function($scope){

  $scope.testVar = 'testing';

}]);


// pinboard.config(['$urlRouterProvider', '$stateProvider'],
//   function($urlRouterProvider, $stateProvider){
//     $stateProvider
//       .state('index', {
//         url: '/index',
//         templateUrl: '/templates/index.html',
//         controller: ['$scope', function($scope){
//           console.log('controller initiated');
//           $scope.testVar = 'testing!';
//         }
//       });
//   });