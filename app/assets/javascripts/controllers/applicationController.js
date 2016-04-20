// Shared controller for entire application, mostly just for auth info sharinggit add -A

pinboard.controller('ApplicationCtrl', ['$scope', 'Auth', 
  function($scope, Auth){

  $scope.signedIn = Auth.isAuthenticated;

  Auth.currentUser().then(function (user){
    $scope.user = user;
  });

  $scope.$on('devise:new-registration', function (e, user){
    $scope.user = user;
  });

  $scope.$on('devise:login', function (e, user){
    $scope.user = user;
  });

  $scope.$on('devise:logout', function (e, user){
    $scope.user = {};
  });

}]);