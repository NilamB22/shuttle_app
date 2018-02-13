'use strict';

describe('Filter: shuttle', function () {

  // load the filter's module
  beforeEach(module('shutleApp'));

  // initialize a new instance of the filter before each test
  var shuttle;
  beforeEach(inject(function ($filter) {
    shuttle = $filter('shuttle');
  }));

  // it('should return the input prefixed with "shuttle filter:"', function () {
  //   var text = 'angularjs';
  //   expect(shuttle(text)).toBe('shuttle filter: ' + text);
  // });

});
