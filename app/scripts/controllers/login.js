'use strict';

/**
 * @ngdoc function
 * @name shutleApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the shutleApp
 */
app.controller('LoginCtrl', ['$scope', 'AuthService', '$http', '$state', function ($scope, AuthService, $http, $state) {
    $scope.result = [];
    $scope.chkLogin = function () {

      var getUserData = AuthService.getCurrentUserInfo($scope.email_field, $scope.password_field);
       var res;

      getUserData.then(
        function (response) {
              if(response.msg == 'SUCCESS')
              {
                $scope.loginMsg = "User Login Successfully";
                $state.go('book');
              }
              $scope.loginMsg = "Invalid Username/password";
        },
        function (error) {
          console.log("The request failed: " + error);
        });
    };
  }]);
