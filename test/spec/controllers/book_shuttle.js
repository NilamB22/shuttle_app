'use strict';

describe('Controller: BookShuttleCtrl', function () {

  // load the controller's module
  beforeEach(module('shutleApp'));
  var BookShuttleCtrl, scope;

 // beforeEach(angular.mock.module('shutleApp'));


 // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BookShuttleCtrl = $controller('BookShuttleCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  //var assert = chai.assert;

  describe('Plugin initialization and component basic construction', function () {
    it('loads jquery plugin properly', function () {
      expect($('<div>').datetimepicker).toBeDefined();
      expect(typeof $('<div>').datetimepicker).toEqual('function');
      expect($('<div>').datetimepicker.defaults).toBeDefined();
    });
  });

  describe("drop down field", function() {

  });
});
