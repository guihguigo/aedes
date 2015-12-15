(function() {
  angular.module('aedes').directive('acmeNavbar', function() {
    var NavbarController, directive;
    NavbarController = function(moment) {
      'ngInject';
      var vm;
      vm = this;
      vm.relativeDate = moment(vm.creationDate).fromNow();
    };
    return directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
        creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxPQUFmLENBQ0UsQ0FBQyxTQURILENBQ2EsWUFEYixFQUMyQixTQUFBO0FBRXZCLFFBQUE7SUFBQSxnQkFBQSxHQUFtQixTQUFDLE1BQUQ7TUFDakI7QUFBQSxVQUFBO01BQ0EsRUFBQSxHQUFLO01BRUwsRUFBRSxDQUFDLFlBQUgsR0FBa0IsTUFBQSxDQUFPLEVBQUUsQ0FBQyxZQUFWLENBQXVCLENBQUMsT0FBeEIsQ0FBQTtJQUpEO1dBT25CLFNBQUEsR0FDRTtNQUFBLFFBQUEsRUFBVSxHQUFWO01BQ0EsV0FBQSxFQUFhLG1DQURiO01BRUEsS0FBQSxFQUFPO1FBQUEsWUFBQSxFQUFjLEdBQWQ7T0FGUDtNQUdBLFVBQUEsRUFBWSxnQkFIWjtNQUlBLFlBQUEsRUFBYyxJQUpkO01BS0EsZ0JBQUEsRUFBa0IsSUFMbEI7O0VBVnFCLENBRDNCO0FBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdhZWRlcydcbiAgLmRpcmVjdGl2ZSAnYWNtZU5hdmJhcicsIC0+XG5cbiAgICBOYXZiYXJDb250cm9sbGVyID0gKG1vbWVudCkgLT5cbiAgICAgICduZ0luamVjdCdcbiAgICAgIHZtID0gdGhpc1xuICAgICAgIyBcInZtLmNyZWF0aW9uXCIgaXMgYXZhaWJsZSBieSBkaXJlY3RpdmUgb3B0aW9uIFwiYmluZFRvQ29udHJvbGxlcjogdHJ1ZVwiXG4gICAgICB2bS5yZWxhdGl2ZURhdGUgPSBtb21lbnQodm0uY3JlYXRpb25EYXRlKS5mcm9tTm93KClcbiAgICAgIHJldHVyblxuXG4gICAgZGlyZWN0aXZlID1cbiAgICAgIHJlc3RyaWN0OiAnRSdcbiAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5odG1sJ1xuICAgICAgc2NvcGU6IGNyZWF0aW9uRGF0ZTogJz0nXG4gICAgICBjb250cm9sbGVyOiBOYXZiYXJDb250cm9sbGVyXG4gICAgICBjb250cm9sbGVyQXM6ICd2bSdcbiAgICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcbiJdfQ==