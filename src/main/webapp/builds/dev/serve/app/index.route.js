(function() {
  angular.module('aedes').config(function($stateProvider, $urlRouterProvider) {
    'ngInject';
    $stateProvider.state('app', {
      url: '/',
      views: {
        "header": {
          templateUrl: 'app/features/header/header.html',
          controller: 'HeaderController',
          controllerAs: 'header'
        },
        "": {
          templateUrl: 'app/features/main/main.html',
          controller: 'MainController',
          controllerAs: 'main'
        }
      }
    });
    return $urlRouterProvider.otherwise('/');
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnJvdXRlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsT0FBZixDQUNFLENBQUMsTUFESCxDQUNVLFNBQUMsY0FBRCxFQUFpQixrQkFBakI7SUFDTjtJQUNBLGNBQ0UsQ0FBQyxLQURILENBQ1MsS0FEVCxFQUVJO01BQUEsR0FBQSxFQUFLLEdBQUw7TUFDQSxLQUFBLEVBQ0U7UUFBQSxRQUFBLEVBQ0U7VUFBQSxXQUFBLEVBQWEsaUNBQWI7VUFDQSxVQUFBLEVBQVksa0JBRFo7VUFFQSxZQUFBLEVBQWMsUUFGZDtTQURGO1FBSUEsRUFBQSxFQUNFO1VBQUEsV0FBQSxFQUFhLDZCQUFiO1VBQ0EsVUFBQSxFQUFZLGdCQURaO1VBRUEsWUFBQSxFQUFjLE1BRmQ7U0FMRjtPQUZGO0tBRko7V0FhQSxrQkFBa0IsQ0FBQyxTQUFuQixDQUE2QixHQUE3QjtFQWZNLENBRFY7QUFBQSIsImZpbGUiOiJpbmRleC5yb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdhZWRlcydcbiAgLmNvbmZpZyAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikgLT5cbiAgICAnbmdJbmplY3QnXG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSAnYXBwJyxcbiAgICAgICAgdXJsOiAnLydcbiAgICAgICAgdmlld3M6XG4gICAgICAgICAgXCJoZWFkZXJcIjpcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2ZlYXR1cmVzL2hlYWRlci9oZWFkZXIuaHRtbCdcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdIZWFkZXJDb250cm9sbGVyJ1xuICAgICAgICAgICAgY29udHJvbGxlckFzOiAnaGVhZGVyJ1xuICAgICAgICAgIFwiXCI6XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9mZWF0dXJlcy9tYWluL21haW4uaHRtbCdcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdNYWluQ29udHJvbGxlcidcbiAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ21haW4nXG5cbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlICcvJ1xuIl19