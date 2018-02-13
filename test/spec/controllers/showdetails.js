'use strict';

describe('Controller: ShowdetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('shutleApp'));

  var ShowdetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShowdetailsCtrl = $controller('ShowdetailsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

});
