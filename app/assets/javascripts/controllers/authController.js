pinboard.controller('AuthCtrl', ['$scope', 'Auth', 
  function($scope, Auth){

  $scope.login = function(){
    console.log($scope.auth);
    Auth.login($scope.auth).then(function(user){
      console.log(user);
    }, function(error){
      console.log(error);
    });
  };

}]);