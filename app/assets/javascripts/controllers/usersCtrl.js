app.controller('UsersCtrl', [
  '$scope', 'Auth',
  function($scope, Auth) {

    Auth.currentUser().then(function(user) {
      $scope.currentUser = user;
    }, function(response) {
      console.error(response);
    });
}]);
