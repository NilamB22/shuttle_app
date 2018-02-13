'use strict';

/**
 * @ngdoc function
 * @name shutleApp.controller:BookShuttleCtrl
 * @description
 * # BookShuttleCtrl
 * Controller of the shutleApp
 */
app.controller('BookShuttleCtrl', function ($scope,$state,$rootScope,$timeout) {
    $scope.from_locations = ['Mindspace', 'Teritex'];
    $scope.to_locations = ['Teritex','Mindspace'];

    $scope.selectedfrmItem ="From";
    $scope.selectedtoItem ="To";


    $scope.dropboxitemselected = function (item,no) {

      if(no==1) {
        $scope.selectedfrmItem = item;
      }
      if(no==2) {
        $scope.selectedtoItem = item;
      }
    }

    $scope.save = function()
    {

      $scope.errmsg="";
      if( $scope.selectedfrmItem=="From" || $scope.selectedtoItem=="To")
      {
        $scope.errmsg="Please Select location!!";
        return false;
      }
      if( $scope.selectedfrmItem== $scope.selectedtoItem)
      {
        $scope.errmsg="From and To location cant be same!!";
        return false;
      }

      $scope.data = [{'from_option': $scope.selectedfrmItem , 'to_option':  $scope.selectedtoItem, 'date_time': $scope.date_time_val ,'status':'confirm'}];


      $scope.$broadcast('someEvent', [1,2,3]);



      $state.go("show",{data: $scope.data});
    }

  });
