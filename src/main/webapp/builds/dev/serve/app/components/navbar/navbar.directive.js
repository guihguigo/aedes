(function() {
  angular.module('aedes').directive('acmeNavbar', function($state) {
    var NavbarController, directive;
    NavbarController = function(moment, $rootScope, $scope, appConfig) {
      'ngInject';
      var vm;
      vm = this;
      vm.mobileFirst = true;
      vm.currentState = $state.current.name;
      vm.appName = appConfig.NAME;
      vm.abas = [
        {
          sref: 'app.inicio',
          name: 'Início',
          showIf: $state.current.name !== 'app.inicio'
        }, {
          sref: 'app.infograficos.exibicao',
          name: 'Consultar infográficos?',
          showIf: $state.current.name !== 'app.infograficos.exibicao'
        }
      ];
      vm.checkActiveState = function(aba) {
        var current;
        current = $state.current.name;
        if (current) {
          if (current === aba.sref) {
            return true;
          }
        }
        return false;
      };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxPQUFmLENBQ0UsQ0FBQyxTQURILENBQ2EsWUFEYixFQUMyQixTQUFDLE1BQUQ7QUFFdkIsUUFBQTtJQUFBLGdCQUFBLEdBQW1CLFNBQUMsTUFBRCxFQUFTLFVBQVQsRUFBcUIsTUFBckIsRUFBNkIsU0FBN0I7TUFDakI7QUFBQSxVQUFBO01BQ0EsRUFBQSxHQUFLO01BRUwsRUFBRSxDQUFDLFdBQUgsR0FBa0I7TUFDbEIsRUFBRSxDQUFDLFlBQUgsR0FBa0IsTUFBTSxDQUFDLE9BQU8sQ0FBQztNQUNqQyxFQUFFLENBQUMsT0FBSCxHQUFrQixTQUFTLENBQUM7TUFDNUIsRUFBRSxDQUFDLElBQUgsR0FBVTtRQUNSO1VBQUMsSUFBQSxFQUFNLFlBQVA7VUFBb0MsSUFBQSxFQUFNLFFBQTFDO1VBQXFFLE1BQUEsRUFBUSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQWYsS0FBdUIsWUFBcEc7U0FEUSxFQUVSO1VBQUMsSUFBQSxFQUFNLDJCQUFQO1VBQW9DLElBQUEsRUFBTSx5QkFBMUM7VUFBcUUsTUFBQSxFQUFRLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBZixLQUF1QiwyQkFBcEc7U0FGUTs7TUFNVixFQUFFLENBQUMsZ0JBQUgsR0FBc0IsU0FBQyxHQUFEO0FBQ3BCLFlBQUE7UUFBQSxPQUFBLEdBQVUsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUN6QixJQUFHLE9BQUg7VUFDRSxJQUFHLE9BQUEsS0FBVyxHQUFHLENBQUMsSUFBbEI7QUFDRSxtQkFBTyxLQURUO1dBREY7O0FBSUEsZUFBTztNQU5hO0lBYkw7V0F1Qm5CLFNBQUEsR0FDRTtNQUFBLFFBQUEsRUFBVSxHQUFWO01BQ0EsV0FBQSxFQUFhLG1DQURiO01BRUEsS0FBQSxFQUNFO1FBQUEsWUFBQSxFQUFjLEdBQWQ7UUFDQSxPQUFBLEVBQVMsR0FEVDtPQUhGO01BS0EsVUFBQSxFQUFZLGdCQUxaO01BTUEsWUFBQSxFQUFjLElBTmQ7TUFPQSxnQkFBQSxFQUFrQixJQVBsQjs7RUExQnFCLENBRDNCO0FBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdhZWRlcydcbiAgLmRpcmVjdGl2ZSAnYWNtZU5hdmJhcicsICgkc3RhdGUpIC0+XG5cbiAgICBOYXZiYXJDb250cm9sbGVyID0gKG1vbWVudCwgJHJvb3RTY29wZSwgJHNjb3BlLCBhcHBDb25maWcpIC0+XG4gICAgICAnbmdJbmplY3QnXG4gICAgICB2bSA9IHRoaXNcblxuICAgICAgdm0ubW9iaWxlRmlyc3QgID0gdHJ1ZVxuICAgICAgdm0uY3VycmVudFN0YXRlID0gJHN0YXRlLmN1cnJlbnQubmFtZVxuICAgICAgdm0uYXBwTmFtZSAgICAgID0gYXBwQ29uZmlnLk5BTUVcbiAgICAgIHZtLmFiYXMgPSBbXG4gICAgICAgIHtzcmVmOiAnYXBwLmluaWNpbycsICAgICAgICAgICAgICAgIG5hbWU6ICdJbsOtY2lvJywgICAgICAgICAgICAgICAgICBzaG93SWY6ICRzdGF0ZS5jdXJyZW50Lm5hbWUgIT0gJ2FwcC5pbmljaW8nfVxuICAgICAgICB7c3JlZjogJ2FwcC5pbmZvZ3JhZmljb3MuZXhpYmljYW8nLCBuYW1lOiAnQ29uc3VsdGFyIGluZm9ncsOhZmljb3M/Jywgc2hvd0lmOiAkc3RhdGUuY3VycmVudC5uYW1lICE9ICdhcHAuaW5mb2dyYWZpY29zLmV4aWJpY2FvJ31cbiAgICAgICAgIyB7c3JlZjogJ2FwcC5jb250cmlidWlkb3JlcycsICAgICAgICBuYW1lOiAnQ29udHJpYnVpZG9yZXMnLCAgICAgICAgICBzaG93SWY6ICRzdGF0ZS5jdXJyZW50Lm5hbWUgIT0gJ2FwcC5jb250cmlidWlkb3Jlcyd9XG4gICAgICBdXG5cbiAgICAgIHZtLmNoZWNrQWN0aXZlU3RhdGUgPSAoYWJhKSAtPlxuICAgICAgICBjdXJyZW50ID0gJHN0YXRlLmN1cnJlbnQubmFtZVxuICAgICAgICBpZiBjdXJyZW50XG4gICAgICAgICAgaWYgY3VycmVudCBpcyBhYmEuc3JlZlxuICAgICAgICAgICAgcmV0dXJuIHRydWVcblxuICAgICAgICByZXR1cm4gZmFsc2VcblxuICAgICAgcmV0dXJuXG5cbiAgICBkaXJlY3RpdmUgPVxuICAgICAgcmVzdHJpY3Q6ICdFJ1xuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmh0bWwnXG4gICAgICBzY29wZTpcbiAgICAgICAgY3JlYXRpb25EYXRlOiAnPSdcbiAgICAgICAgYXBwTmFtZTogJz0nXG4gICAgICBjb250cm9sbGVyOiBOYXZiYXJDb250cm9sbGVyXG4gICAgICBjb250cm9sbGVyQXM6ICd2bSdcbiAgICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcbiJdfQ==