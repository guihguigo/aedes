(function() {
  angular.module('aedes').directive('acmeNavbar', function($state) {
    var NavbarController, directive;
    NavbarController = function(moment) {
      'ngInject';
      var vm;
      vm = this;
      vm.mobileFirst = true;
      vm.currentState = $state.current.name;
      vm.abas = [
        {
          sref: 'infograficos.exibicao',
          name: 'Consultar infográficos?',
          showIf: $state.current.name !== 'infograficos.exibicao'
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxPQUFmLENBQ0UsQ0FBQyxTQURILENBQ2EsWUFEYixFQUMyQixTQUFDLE1BQUQ7QUFFdkIsUUFBQTtJQUFBLGdCQUFBLEdBQW1CLFNBQUMsTUFBRDtNQUNqQjtBQUFBLFVBQUE7TUFDQSxFQUFBLEdBQUs7TUFFTCxFQUFFLENBQUMsV0FBSCxHQUFpQjtNQUNqQixFQUFFLENBQUMsWUFBSCxHQUFrQixNQUFNLENBQUMsT0FBTyxDQUFDO01BQ2pDLEVBQUUsQ0FBQyxJQUFILEdBQVU7UUFDUjtVQUFBLElBQUEsRUFBTSx1QkFBTjtVQUErQixJQUFBLEVBQU0seUJBQXJDO1VBQWdFLE1BQUEsRUFBUSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQWYsS0FBdUIsdUJBQS9GO1NBRFE7O0lBTk87V0FZbkIsU0FBQSxHQUNFO01BQUEsUUFBQSxFQUFVLEdBQVY7TUFDQSxXQUFBLEVBQWEsbUNBRGI7TUFFQSxLQUFBLEVBQ0U7UUFBQSxZQUFBLEVBQWMsR0FBZDtRQUNBLE9BQUEsRUFBUyxHQURUO09BSEY7TUFLQSxVQUFBLEVBQVksZ0JBTFo7TUFNQSxZQUFBLEVBQWMsSUFOZDtNQU9BLGdCQUFBLEVBQWtCLElBUGxCOztFQWZxQixDQUQzQjtBQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSAnYWVkZXMnXG4gIC5kaXJlY3RpdmUgJ2FjbWVOYXZiYXInLCAoJHN0YXRlKSAtPlxuXG4gICAgTmF2YmFyQ29udHJvbGxlciA9IChtb21lbnQpIC0+XG4gICAgICAnbmdJbmplY3QnXG4gICAgICB2bSA9IHRoaXNcblxuICAgICAgdm0ubW9iaWxlRmlyc3QgPSB0cnVlXG4gICAgICB2bS5jdXJyZW50U3RhdGUgPSAkc3RhdGUuY3VycmVudC5uYW1lXG4gICAgICB2bS5hYmFzID0gW1xuICAgICAgICBzcmVmOiAnaW5mb2dyYWZpY29zLmV4aWJpY2FvJywgbmFtZTogJ0NvbnN1bHRhciBpbmZvZ3LDoWZpY29zPycsIHNob3dJZjogJHN0YXRlLmN1cnJlbnQubmFtZSAhPSAnaW5mb2dyYWZpY29zLmV4aWJpY2FvJ1xuICAgICAgXVxuXG4gICAgICByZXR1cm5cblxuICAgIGRpcmVjdGl2ZSA9XG4gICAgICByZXN0cmljdDogJ0UnXG4gICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuaHRtbCdcbiAgICAgIHNjb3BlOlxuICAgICAgICBjcmVhdGlvbkRhdGU6ICc9J1xuICAgICAgICBhcHBOYW1lOiAnPSdcbiAgICAgIGNvbnRyb2xsZXI6IE5hdmJhckNvbnRyb2xsZXJcbiAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICAgICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuIl19