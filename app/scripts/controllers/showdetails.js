'use strict';

/**
 * @ngdoc function
 * @name shutleApp.controller:ShowdetailsCtrl
 * @description
 * # ShowdetailsCtrl
 * Controller of the shutleApp
 */
app.controller('ShowdetailsCtrl', function ($scope,$stateParams,$state) {

    $scope.$on('someEvent', function(event, data) {
      alert('brodcast received');
      console.log(data); });





    $scope.data = $stateParams.data;
    $scope.class ="";

    $scope.canclBookingData=function(key)
    {
        $scope.index = key;
    }
    $scope.canclBooking =function(index,key,data)
    {
      $scope.data[index][key] = data;
    }

    $scope.goBack = function()
    {
      $state.go('book');
    }
  });
