'use strict';

describe('Directive: shuttle', function () {

  // load the directive's module
  beforeEach(module('shutleApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));
  //
  // it('should make hidden element visible', inject(function ($compile) {
  //   element = angular.element('<shuttle></shuttle>');
  //   element = $compile(element)(scope);
  //   expect(element.text()).toBe('this is the shuttle directive');
  // }));
});
