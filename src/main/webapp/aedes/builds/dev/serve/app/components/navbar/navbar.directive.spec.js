
/*
@todo Complete the test
This example is not perfect.
Test should check if MomentJS have been called
 */

(function() {
  describe('directive navbar', function() {
    var element, timeInMs, vm;
    vm = void 0;
    element = void 0;
    timeInMs = void 0;
    beforeEach(module('aedes'));
    beforeEach(inject(function($compile, $rootScope) {
      timeInMs = new Date();
      timeInMs = timeInMs.setHours(timeInMs.getHours() - 24);
      element = angular.element("<acme-navbar creation-date='" + timeInMs + "'></acme-navbar>");
      $compile(element)($rootScope.$new());
      $rootScope.$digest();
      return vm = element.isolateScope().vm;
    }));
    it('should be compiled', function() {
      return expect(element.html()).not.toEqual(null);
    });
    return it('should have isolate scope object with instanciate members', function() {
      expect(vm).toEqual(jasmine.any(Object));
      expect(vm.creationDate).toEqual(jasmine.any(Number));
      expect(vm.creationDate).toEqual(timeInMs);
      expect(vm.relativeDate).toEqual(jasmine.any(String));
      return expect(vm.relativeDate).toEqual('a day ago');
    });
  });

}).call(this);
