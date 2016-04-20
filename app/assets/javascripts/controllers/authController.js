pinboard.controller('AuthCtrl', ['$scope', '$location', 'Auth', 
  function($scope, $location, Auth){

  $scope.login = function(){
    Auth.login($scope.auth).then(function(user){
      $scope.user = user;
      $scope.authMessage = "";
    }, function(error){
      $scope.authMessage = "Login Failed!";
    });
  };

  $scope.logout = function(){
    Auth.logout().then(function(){
    });
  };

}]);