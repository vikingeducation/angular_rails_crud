pinboard.controller('authenticationCtrl',
  ['$scope', 'Auth', '$location', function($scope, Auth, $location) {

    $scope.newUser = {};

    var config = {
      headers: {
        'X-HTTP-Method-Override': 'POST'
      }
    };

    newUser = $scope.newUser;

    $scope.createUser = function(){
      console.log('newUser: '+ $scope.newUser);
      Auth.register($scope.newUser, config).then(function(registeredUser) {
        console.log(registeredUser); // => {id: 1, ect: '...'}
      }, function(error) {
        // Registration failed...
        console.log('registration failed');
      });

      $scope.$on('devise:new-registration', function(event, user) {
        // Redirect on registration
        $location.path('/pins/index');
      });

     };

    $scope.signIn = function(){

    };

  }]);