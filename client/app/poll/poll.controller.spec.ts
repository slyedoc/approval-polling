'use strict';

describe('Component: PollComponent', function () {

  // load the controller's module
  beforeEach(module('approvalPollingApp'));

  var PollComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    PollComponent = $componentController('PollComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
