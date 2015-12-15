
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLnNwZWMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7OztBQUFBO0VBTUEsUUFBQSxDQUFTLG9CQUFULEVBQStCLFNBQUE7QUFDN0IsUUFBQTtJQUFBLEVBQUEsR0FBSztJQUNMLE9BQUEsR0FBVTtJQUVWLFVBQUEsQ0FBVyxNQUFBLENBQU8sT0FBUCxDQUFYO0lBRUEsVUFBQSxDQUFXLE1BQUEsQ0FBTyxTQUFDLFFBQUQsRUFBVyxVQUFYLEVBQXVCLGlCQUF2QixFQUEwQyxFQUExQztNQUNoQixLQUFBLENBQU0saUJBQU4sRUFBeUIsaUJBQXpCLENBQTJDLENBQUMsR0FBRyxDQUFDLFFBQWhELENBQXlELFNBQUE7ZUFDdkQsRUFBRSxDQUFDLElBQUgsQ0FBUSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsRUFBakIsRUFBcUIsRUFBckIsQ0FBUjtNQUR1RCxDQUF6RDtNQUdBLE9BQUEsR0FBVSxPQUFPLENBQUMsT0FBUixDQUFnQix3RUFBaEI7TUFFVixRQUFBLENBQVMsT0FBVCxDQUFBLENBQWtCLFVBQVUsQ0FBQyxJQUFYLENBQUEsQ0FBbEI7TUFDQSxVQUFVLENBQUMsT0FBWCxDQUFBO2FBQ0EsRUFBQSxHQUFLLE9BQU8sQ0FBQyxZQUFSLENBQUEsQ0FBc0IsQ0FBQztJQVJaLENBQVAsQ0FBWDtJQVVBLEVBQUEsQ0FBRyxvQkFBSCxFQUF5QixTQUFBO2FBQ3ZCLE1BQUEsQ0FBTyxPQUFPLENBQUMsSUFBUixDQUFBLENBQVAsQ0FBc0IsQ0FBQyxHQUFHLENBQUMsT0FBM0IsQ0FBbUMsSUFBbkM7SUFEdUIsQ0FBekI7SUFHQSxFQUFBLENBQUcsMkRBQUgsRUFBZ0UsU0FBQTtNQUM5RCxNQUFBLENBQU8sRUFBUCxDQUFVLENBQUMsT0FBWCxDQUFtQixPQUFPLENBQUMsR0FBUixDQUFZLE1BQVosQ0FBbkI7TUFFQSxNQUFBLENBQU8sRUFBRSxDQUFDLFlBQVYsQ0FBdUIsQ0FBQyxPQUF4QixDQUFnQyxPQUFPLENBQUMsR0FBUixDQUFZLEtBQVosQ0FBaEM7YUFDQSxNQUFBLENBQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxNQUF2QixDQUE4QixDQUFDLE9BQS9CLENBQXVDLENBQXZDO0lBSjhELENBQWhFO1dBTUEsRUFBQSxDQUFHLG1CQUFILEVBQXdCLE1BQUEsQ0FBTyxTQUFDLElBQUQ7YUFDN0IsTUFBQSxDQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBakIsQ0FBc0IsQ0FBQyxPQUF2QixDQUErQixPQUFPLENBQUMsY0FBUixDQUF1Qiw2QkFBdkIsQ0FBL0I7SUFENkIsQ0FBUCxDQUF4QjtFQXpCNkIsQ0FBL0I7QUFOQSIsImZpbGUiOiJjb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZS5zcGVjLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiIyMjXG5AdG9kbyBDb21wbGV0ZSB0aGUgdGVzdFxuVGhpcyBleGFtcGxlIGlzIG5vdCBwZXJmZWN0LlxuVGhlIGBsaW5rYCBmdW5jdGlvbiBpcyBub3QgdGVzdGVkLlxuKG1hbGFya2V5IHVzYWdlLCBhZGRDbGFzcywgJHdhdGNoLCAkZGVzdHJveSlcbiMjI1xuZGVzY3JpYmUgJ2RpcmVjdGl2ZSBtYWxhcmtleScsICgpIC0+XG4gIHZtID0gdW5kZWZpbmVkXG4gIGVsZW1lbnQgPSBlbGVtZW50XG5cbiAgYmVmb3JlRWFjaCBtb2R1bGUgJ2FlZGVzJ1xuXG4gIGJlZm9yZUVhY2ggaW5qZWN0ICgkY29tcGlsZSwgJHJvb3RTY29wZSwgZ2l0aHViQ29udHJpYnV0b3IsICRxKSAtPlxuICAgIHNweU9uKGdpdGh1YkNvbnRyaWJ1dG9yLCAnZ2V0Q29udHJpYnV0b3JzJykuYW5kLmNhbGxGYWtlICgpIC0+XG4gICAgICAkcS53aGVuIFt7fSwge30sIHt9LCB7fSwge30sIHt9XVxuXG4gICAgZWxlbWVudCA9IGFuZ3VsYXIuZWxlbWVudCAnPGFjbWUtbWFsYXJrZXkgZXh0cmEtdmFsdWVzPVwiW1xcJ1BvbmV5XFwnLCBcXCdNb25rZXlcXCddXCI+PC9hY21lLW1hbGFya2V5PidcblxuICAgICRjb21waWxlKGVsZW1lbnQpICRyb290U2NvcGUuJG5ldygpXG4gICAgJHJvb3RTY29wZS4kZGlnZXN0KClcbiAgICB2bSA9IGVsZW1lbnQuaXNvbGF0ZVNjb3BlKCkudm1cblxuICBpdCAnc2hvdWxkIGJlIGNvbXBpbGVkJywgKCkgLT5cbiAgICBleHBlY3QoZWxlbWVudC5odG1sKCkpLm5vdC50b0VxdWFsIG51bGxcblxuICBpdCAnc2hvdWxkIGhhdmUgaXNvbGF0ZSBzY29wZSBvYmplY3Qgd2l0aCBpbnN0YW5jaWF0ZSBtZW1iZXJzJywgKCkgLT5cbiAgICBleHBlY3Qodm0pLnRvRXF1YWwgamFzbWluZS5hbnkgT2JqZWN0XG5cbiAgICBleHBlY3Qodm0uY29udHJpYnV0b3JzKS50b0VxdWFsIGphc21pbmUuYW55IEFycmF5XG4gICAgZXhwZWN0KHZtLmNvbnRyaWJ1dG9ycy5sZW5ndGgpLnRvRXF1YWwgNlxuXG4gIGl0ICdzaG91bGQgbG9nIGEgaW5mbycsIGluamVjdCAoJGxvZykgLT5cbiAgICBleHBlY3QoJGxvZy5pbmZvLmxvZ3MpLnRvRXF1YWwgamFzbWluZS5zdHJpbmdNYXRjaGluZyAnQWN0aXZhdGVkIENvbnRyaWJ1dG9ycyBWaWV3J1xuIl19