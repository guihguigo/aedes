(function() {
  angular.module('aedes').directive('acmeNavbar', function() {
    var NavbarController, directive;
    NavbarController = function(moment) {
      'ngInject';
      var vm;
      vm = this;
      vm.mobileFirst = true;
      vm.abas = [
        {
          sref: 'infograficos.exibicao',
          name: 'Consultar infográficos?'
        }
      ];
    };
    return directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
        creationDate: '=',
        appName: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxPQUFmLENBQ0UsQ0FBQyxTQURILENBQ2EsWUFEYixFQUMyQixTQUFBO0FBRXZCLFFBQUE7SUFBQSxnQkFBQSxHQUFtQixTQUFDLE1BQUQ7TUFDakI7QUFBQSxVQUFBO01BQ0EsRUFBQSxHQUFLO01BRUwsRUFBRSxDQUFDLFdBQUgsR0FBaUI7TUFDakIsRUFBRSxDQUFDLElBQUgsR0FBVTtRQUNSO1VBQUEsSUFBQSxFQUFNLHVCQUFOO1VBQStCLElBQUEsRUFBTSx5QkFBckM7U0FEUTs7SUFMTztXQVduQixTQUFBLEdBQ0U7TUFBQSxRQUFBLEVBQVUsR0FBVjtNQUNBLFdBQUEsRUFBYSxtQ0FEYjtNQUVBLEtBQUEsRUFDRTtRQUFBLFlBQUEsRUFBYyxHQUFkO1FBQ0EsT0FBQSxFQUFTLEdBRFQ7T0FIRjtNQUtBLFVBQUEsRUFBWSxnQkFMWjtNQU1BLFlBQUEsRUFBYyxJQU5kO01BT0EsZ0JBQUEsRUFBa0IsSUFQbEI7O0VBZHFCLENBRDNCO0FBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdhZWRlcydcbiAgLmRpcmVjdGl2ZSAnYWNtZU5hdmJhcicsIC0+XG5cbiAgICBOYXZiYXJDb250cm9sbGVyID0gKG1vbWVudCkgLT5cbiAgICAgICduZ0luamVjdCdcbiAgICAgIHZtID0gdGhpc1xuXG4gICAgICB2bS5tb2JpbGVGaXJzdCA9IHRydWVcbiAgICAgIHZtLmFiYXMgPSBbXG4gICAgICAgIHNyZWY6ICdpbmZvZ3JhZmljb3MuZXhpYmljYW8nLCBuYW1lOiAnQ29uc3VsdGFyIGluZm9ncsOhZmljb3M/J1xuICAgICAgXVxuXG4gICAgICByZXR1cm5cblxuICAgIGRpcmVjdGl2ZSA9XG4gICAgICByZXN0cmljdDogJ0UnXG4gICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuaHRtbCdcbiAgICAgIHNjb3BlOlxuICAgICAgICBjcmVhdGlvbkRhdGU6ICc9J1xuICAgICAgICBhcHBOYW1lOiAnPSdcbiAgICAgIGNvbnRyb2xsZXI6IE5hdmJhckNvbnRyb2xsZXJcbiAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICAgICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuIl19