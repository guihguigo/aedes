(function() {
  angular.module('aedes').directive('acmeNavbar', function($state) {
    var NavbarController, directive;
    NavbarController = function(moment, $rootScope, $scope, appConfig) {
      'ngInject';
      var vm;
      vm = this;
      vm.mobileFirst = false;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxPQUFmLENBQ0UsQ0FBQyxTQURILENBQ2EsWUFEYixFQUMyQixTQUFDLE1BQUQ7QUFFdkIsUUFBQTtJQUFBLGdCQUFBLEdBQW1CLFNBQUMsTUFBRCxFQUFTLFVBQVQsRUFBcUIsTUFBckIsRUFBNkIsU0FBN0I7TUFDakI7QUFBQSxVQUFBO01BQ0EsRUFBQSxHQUFLO01BRUwsRUFBRSxDQUFDLFdBQUgsR0FBa0I7TUFDbEIsRUFBRSxDQUFDLFlBQUgsR0FBa0IsTUFBTSxDQUFDLE9BQU8sQ0FBQztNQUNqQyxFQUFFLENBQUMsT0FBSCxHQUFrQixTQUFTLENBQUM7TUFDNUIsRUFBRSxDQUFDLElBQUgsR0FBVTtRQUNSO1VBQUMsSUFBQSxFQUFNLFlBQVA7VUFBb0MsSUFBQSxFQUFNLFFBQTFDO1VBQXFFLE1BQUEsRUFBUSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQWYsS0FBdUIsWUFBcEc7U0FEUSxFQUVSO1VBQUMsSUFBQSxFQUFNLDJCQUFQO1VBQW9DLElBQUEsRUFBTSx5QkFBMUM7VUFBcUUsTUFBQSxFQUFRLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBZixLQUF1QiwyQkFBcEc7U0FGUTs7TUFNVixFQUFFLENBQUMsZ0JBQUgsR0FBc0IsU0FBQyxHQUFEO0FBQ3BCLFlBQUE7UUFBQSxPQUFBLEdBQVUsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUN6QixJQUFHLE9BQUg7VUFDRSxJQUFHLE9BQUEsS0FBVyxHQUFHLENBQUMsSUFBbEI7QUFDRSxtQkFBTyxLQURUO1dBREY7O0FBSUEsZUFBTztNQU5hO0lBYkw7V0F1Qm5CLFNBQUEsR0FDRTtNQUFBLFFBQUEsRUFBVSxHQUFWO01BQ0EsV0FBQSxFQUFhLG1DQURiO01BRUEsS0FBQSxFQUNFO1FBQUEsWUFBQSxFQUFjLEdBQWQ7UUFDQSxPQUFBLEVBQVMsR0FEVDtPQUhGO01BS0EsVUFBQSxFQUFZLGdCQUxaO01BTUEsWUFBQSxFQUFjLElBTmQ7TUFPQSxnQkFBQSxFQUFrQixJQVBsQjs7RUExQnFCLENBRDNCO0FBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdhZWRlcydcbiAgLmRpcmVjdGl2ZSAnYWNtZU5hdmJhcicsICgkc3RhdGUpIC0+XG5cbiAgICBOYXZiYXJDb250cm9sbGVyID0gKG1vbWVudCwgJHJvb3RTY29wZSwgJHNjb3BlLCBhcHBDb25maWcpIC0+XG4gICAgICAnbmdJbmplY3QnXG4gICAgICB2bSA9IHRoaXNcblxuICAgICAgdm0ubW9iaWxlRmlyc3QgID0gZmFsc2VcbiAgICAgIHZtLmN1cnJlbnRTdGF0ZSA9ICRzdGF0ZS5jdXJyZW50Lm5hbWVcbiAgICAgIHZtLmFwcE5hbWUgICAgICA9IGFwcENvbmZpZy5OQU1FXG4gICAgICB2bS5hYmFzID0gW1xuICAgICAgICB7c3JlZjogJ2FwcC5pbmljaW8nLCAgICAgICAgICAgICAgICBuYW1lOiAnSW7DrWNpbycsICAgICAgICAgICAgICAgICAgc2hvd0lmOiAkc3RhdGUuY3VycmVudC5uYW1lICE9ICdhcHAuaW5pY2lvJ31cbiAgICAgICAge3NyZWY6ICdhcHAuaW5mb2dyYWZpY29zLmV4aWJpY2FvJywgbmFtZTogJ0NvbnN1bHRhciBpbmZvZ3LDoWZpY29zPycsIHNob3dJZjogJHN0YXRlLmN1cnJlbnQubmFtZSAhPSAnYXBwLmluZm9ncmFmaWNvcy5leGliaWNhbyd9XG4gICAgICAgICMge3NyZWY6ICdhcHAuY29udHJpYnVpZG9yZXMnLCAgICAgICAgbmFtZTogJ0NvbnRyaWJ1aWRvcmVzJywgICAgICAgICAgc2hvd0lmOiAkc3RhdGUuY3VycmVudC5uYW1lICE9ICdhcHAuY29udHJpYnVpZG9yZXMnfVxuICAgICAgXVxuXG4gICAgICB2bS5jaGVja0FjdGl2ZVN0YXRlID0gKGFiYSkgLT5cbiAgICAgICAgY3VycmVudCA9ICRzdGF0ZS5jdXJyZW50Lm5hbWVcbiAgICAgICAgaWYgY3VycmVudFxuICAgICAgICAgIGlmIGN1cnJlbnQgaXMgYWJhLnNyZWZcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICAgIHJldHVyblxuXG4gICAgZGlyZWN0aXZlID1cbiAgICAgIHJlc3RyaWN0OiAnRSdcbiAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5odG1sJ1xuICAgICAgc2NvcGU6XG4gICAgICAgIGNyZWF0aW9uRGF0ZTogJz0nXG4gICAgICAgIGFwcE5hbWU6ICc9J1xuICAgICAgY29udHJvbGxlcjogTmF2YmFyQ29udHJvbGxlclxuICAgICAgY29udHJvbGxlckFzOiAndm0nXG4gICAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlXG4iXX0=