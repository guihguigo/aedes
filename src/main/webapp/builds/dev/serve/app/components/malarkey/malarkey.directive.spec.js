
/*
@todo Complete the test
This example is not perfect.
The `link` function is not tested.
(malarkey usage, addClass, $watch, $destroy)
 */

(function() {
  describe('directive malarkey', function() {
    var element, vm;
    vm = void 0;
    element = element;
    beforeEach(module('aedes'));
    beforeEach(inject(function($compile, $rootScope, githubContributor, $q) {
      spyOn(githubContributor, 'getContributors').and.callFake(function() {
        return $q.when([{}, {}, {}, {}, {}, {}]);
      });
      element = angular.element('<acme-malarkey extra-values="[\'Poney\', \'Monkey\']"></acme-malarkey>');
      $compile(element)($rootScope.$new());
      $rootScope.$digest();
      return vm = element.isolateScope().vm;
    }));
    it('should be compiled', function() {
      return expect(element.html()).not.toEqual(null);
    });
    it('should have isolate scope object with instanciate members', function() {
      expect(vm).toEqual(jasmine.any(Object));
      expect(vm.contributors).toEqual(jasmine.any(Array));
      return expect(vm.contributors.length).toEqual(6);
    });
    return it('should log a info', inject(function($log) {
      return expect($log.info.logs).toEqual(jasmine.stringMatching('Activated Contributors View'));
    }));
  });

}).call(this);
