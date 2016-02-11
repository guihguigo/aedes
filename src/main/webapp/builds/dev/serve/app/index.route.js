(function() {
  angular.module('aedes').config(function($stateProvider, $urlRouterProvider) {
    'ngInject';
    $stateProvider.state('app', {
      url: '',
      views: {
        "header": {
          templateUrl: 'app/features/header/header.html',
          controller: 'HeaderController',
          controllerAs: 'header'
        },
        "main": {
          templateUrl: 'app/app.html'
        }
      }
    }).state('app.inicio', {
      url: '/inicio',
      views: {
        "": {
          templateUrl: 'app/features/main/main.html',
          controller: 'MainController',
          controllerAs: 'main'
        }
      }
    });
    return $urlRouterProvider.otherwise('/inicio');
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnJvdXRlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsT0FBZixDQUNFLENBQUMsTUFESCxDQUNVLFNBQUMsY0FBRCxFQUFpQixrQkFBakI7SUFDTjtJQUVBLGNBQ0UsQ0FBQyxLQURILENBQ1MsS0FEVCxFQUVJO01BQUEsR0FBQSxFQUFLLEVBQUw7TUFDQSxLQUFBLEVBQ0U7UUFBQSxRQUFBLEVBQ0U7VUFBQSxXQUFBLEVBQWEsaUNBQWI7VUFDQSxVQUFBLEVBQVksa0JBRFo7VUFFQSxZQUFBLEVBQWMsUUFGZDtTQURGO1FBSUEsTUFBQSxFQUNFO1VBQUEsV0FBQSxFQUFhLGNBQWI7U0FMRjtPQUZGO0tBRkosQ0FXRSxDQUFDLEtBWEgsQ0FXUyxZQVhULEVBWUk7TUFBQSxHQUFBLEVBQUssU0FBTDtNQUNBLEtBQUEsRUFDRTtRQUFBLEVBQUEsRUFDRTtVQUFBLFdBQUEsRUFBYSw2QkFBYjtVQUNBLFVBQUEsRUFBWSxnQkFEWjtVQUVBLFlBQUEsRUFBYyxNQUZkO1NBREY7T0FGRjtLQVpKO1dBbUJBLGtCQUFrQixDQUFDLFNBQW5CLENBQTZCLFNBQTdCO0VBdEJNLENBRFY7QUFBQSIsImZpbGUiOiJpbmRleC5yb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdhZWRlcydcbiAgLmNvbmZpZyAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikgLT5cbiAgICAnbmdJbmplY3QnXG5cbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlICdhcHAnLFxuICAgICAgICB1cmw6ICcnXG4gICAgICAgIHZpZXdzOlxuICAgICAgICAgIFwiaGVhZGVyXCI6XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9mZWF0dXJlcy9oZWFkZXIvaGVhZGVyLmh0bWwnXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnSGVhZGVyQ29udHJvbGxlcidcbiAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ2hlYWRlcidcbiAgICAgICAgICBcIm1haW5cIjpcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2FwcC5odG1sJ1xuXG4gICAgICAuc3RhdGUgJ2FwcC5pbmljaW8nLFxuICAgICAgICB1cmw6ICcvaW5pY2lvJ1xuICAgICAgICB2aWV3czpcbiAgICAgICAgICBcIlwiOlxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvZmVhdHVyZXMvbWFpbi9tYWluLmh0bWwnXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnTWFpbkNvbnRyb2xsZXInXG4gICAgICAgICAgICBjb250cm9sbGVyQXM6ICdtYWluJ1xuXG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSAnL2luaWNpbydcbiJdfQ==