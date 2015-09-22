pinboard.controller('authenticationCtrl',
  ['$scope', 'Auth', function(Auth, $scope) {
    $scope.newUser = {};
      // var credentials = {
      //   email: $scope.newUser.email,
      //   password: $scope.newUser.password,
      //   password_confirmation: $scope.newUser.password_confirmation,
      //   username: $scope.newUser.username
      // };

    var config = {
      headers: {
        'X-HTTP-Method-Override': 'POST'
      }
    };


    $scope.createUser = function(){
      Auth.register($scope.newUser, config).then(function(registeredUser) {
        console.log(registeredUser); // => {id: 1, ect: '...'}
      }, function(error) {
        // Registration failed...
        console.log('registration failed');
      });

      $scope.$on('devise:new-registration', function(event, user) {
        // ...callback?
      });

     };

    $scope.signIn = function(){

    };

  }]);