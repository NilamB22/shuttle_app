'use strict';

/**
 * @ngdoc function
 * @name shutleApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the shutleApp
 */
app.controller('LogoutCtrl', function ($state) {

    $state.go('login');
  });
