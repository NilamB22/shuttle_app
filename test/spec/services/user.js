'use strict';

describe('Service: User', function () {

  // load the service's module
  beforeEach(module('shutleApp'));

  // instantiate service
  var dataService;
  beforeEach(inject(function (_AuthService_,$httpBackend) {
    dataService = _AuthService_;
    $httpBackend.when('GET', '../../data/user.json')
      .respond({data: 'sample data'});
    dataService.getCurrentUserInfo();
    $httpBackend.flush();
  }));

  it('should store data correctly', function() {
    expect(dataService.data).toEqual({data: 'sample data'});
  });

});
