'use strict';

describe('Controller: HomeTempCtrl', function () {

  // load the controller's module
  beforeEach(module('beatboxApp'));

  var HomeTempCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HomeTempCtrl = $controller('HomeTempCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
