(function() {
  angular.module('aedes').controller('HeaderController', function($timeout, webDevTec, toastr) {
    'ngInject';
    var init, vm;
    vm = this;
    init = function() {
      return $(".button-collapse").sideNav();
    };
    vm.appName = "Aedes";
    init();
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlYXR1cmVzL2hlYWRlci9oZWFkZXIuY29udHJvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLE9BQWYsQ0FDRSxDQUFDLFVBREgsQ0FDYyxrQkFEZCxFQUNrQyxTQUFDLFFBQUQsRUFBVyxTQUFYLEVBQXNCLE1BQXRCO0lBQzlCO0FBQUEsUUFBQTtJQUNBLEVBQUEsR0FBSztJQUVMLElBQUEsR0FBTyxTQUFBO2FBQ0wsQ0FBQSxDQUFFLGtCQUFGLENBQXFCLENBQUMsT0FBdEIsQ0FBQTtJQURLO0lBR1AsRUFBRSxDQUFDLE9BQUgsR0FBYTtJQUNiLElBQUEsQ0FBQTtFQVI4QixDQURsQztBQUFBIiwiZmlsZSI6ImZlYXR1cmVzL2hlYWRlci9oZWFkZXIuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdhZWRlcydcbiAgLmNvbnRyb2xsZXIgJ0hlYWRlckNvbnRyb2xsZXInLCAoJHRpbWVvdXQsIHdlYkRldlRlYywgdG9hc3RyKSAtPlxuICAgICduZ0luamVjdCdcbiAgICB2bSA9IHRoaXNcblxuICAgIGluaXQgPSAtPlxuICAgICAgJChcIi5idXR0b24tY29sbGFwc2VcIikuc2lkZU5hdigpXG5cbiAgICB2bS5hcHBOYW1lID0gXCJBZWRlc1wiXG4gICAgaW5pdCgpXG5cbiAgICByZXR1cm5cbiJdfQ==