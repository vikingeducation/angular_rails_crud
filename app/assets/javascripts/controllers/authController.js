pinboard.controller('AuthCtrl', ['$scope', '$location', 'Auth', 
  function($scope, $location, Auth){

  $scope.signedIn = Auth.isAuthenticated;

  Auth.currentUser().then(function(user){
    $scope.user = user;
  });

  $scope.login = function(){
    Auth.login($scope.auth).then(function(user){
      $location.path("/");
      $scope.user = user;
      $scope.authMessage = "";
    }, function(error){
      $scope.authMessage = "Login Failed!";
    });
  };

$location.path("/");
  $scope.logout = function(){
    Auth.logout().then(function(){
      $location.path("/");
    });
  };

}]);