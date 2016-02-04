(function() {
  angular.module('aedes').config(function($stateProvider, $urlRouterProvider) {
    'ngInject';
    $stateProvider.state('app.infograficos', {
      url: '/infograficos',
      views: {
        "": {
          templateUrl: 'app/features/charts/charts.html',
          controller: 'ChartsController',
          resolve: {
            focos: function(ChartsService) {
              return ChartsService.getFocos();
            },
            prevencoesByFoco: function(ChartsService) {
              return ChartsService.getPrevencoesByFoco();
            }
          }
        }
      }
    }).state('app.infograficos.exibicao', {
      url: '/exibicao',
      views: {
        "regional": {
          templateUrl: 'app/features/charts/regional/chart.html',
          controller: 'ChartRegionalController',
          controllerAs: 'regionalCtrl'
        },
        "mensal": {
          templateUrl: 'app/features/charts/mensal/chart.html',
          controller: 'ChartMensalController',
          controllerAs: 'mensalCtrl'
        },
        "emDia": {
          templateUrl: 'app/features/charts/emDia/chart.html',
          controller: 'ChartEmDiaController',
          controllerAs: 'emDiaCtrl'
        },
        "atrasadas": {
          templateUrl: 'app/features/charts/atrasadas/chart.html',
          controller: 'ChartAtrasadasController',
          controllerAs: 'atrasadasCtrl'
        }
      }
    });
    return $urlRouterProvider.otherwise('/inicio');
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlYXR1cmVzL2NoYXJ0cy9jaGFydHMucm91dGUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxPQUFmLENBQ0UsQ0FBQyxNQURILENBQ1UsU0FBQyxjQUFELEVBQWlCLGtCQUFqQjtJQUNOO0lBQ0EsY0FFRSxDQUFDLEtBRkgsQ0FFUyxrQkFGVCxFQUdJO01BQUEsR0FBQSxFQUFLLGVBQUw7TUFDQSxLQUFBLEVBQ0U7UUFBQSxFQUFBLEVBQ0U7VUFBQSxXQUFBLEVBQWEsaUNBQWI7VUFDQSxVQUFBLEVBQWEsa0JBRGI7VUFFQSxPQUFBLEVBQ0U7WUFBQSxLQUFBLEVBQU8sU0FBQyxhQUFEO3FCQUNMLGFBQWEsQ0FBQyxRQUFkLENBQUE7WUFESyxDQUFQO1lBRUEsZ0JBQUEsRUFBa0IsU0FBQyxhQUFEO3FCQUNoQixhQUFhLENBQUMsbUJBQWQsQ0FBQTtZQURnQixDQUZsQjtXQUhGO1NBREY7T0FGRjtLQUhKLENBZUUsQ0FBQyxLQWZILENBZVMsMkJBZlQsRUFnQkk7TUFBQSxHQUFBLEVBQUssV0FBTDtNQUNBLEtBQUEsRUFDRTtRQUFBLFVBQUEsRUFDRTtVQUFBLFdBQUEsRUFBYSx5Q0FBYjtVQUNBLFVBQUEsRUFBWSx5QkFEWjtVQUVBLFlBQUEsRUFBYyxjQUZkO1NBREY7UUFJQSxRQUFBLEVBQ0U7VUFBQSxXQUFBLEVBQWEsdUNBQWI7VUFDQSxVQUFBLEVBQVksdUJBRFo7VUFFQSxZQUFBLEVBQWMsWUFGZDtTQUxGO1FBUUEsT0FBQSxFQUNFO1VBQUEsV0FBQSxFQUFhLHNDQUFiO1VBQ0EsVUFBQSxFQUFZLHNCQURaO1VBRUEsWUFBQSxFQUFjLFdBRmQ7U0FURjtRQVlBLFdBQUEsRUFDRTtVQUFBLFdBQUEsRUFBYSwwQ0FBYjtVQUNBLFVBQUEsRUFBWSwwQkFEWjtVQUVBLFlBQUEsRUFBYyxlQUZkO1NBYkY7T0FGRjtLQWhCSjtXQW1DQSxrQkFBa0IsQ0FBQyxTQUFuQixDQUE2QixTQUE3QjtFQXJDTSxDQURWO0FBQUEiLCJmaWxlIjoiZmVhdHVyZXMvY2hhcnRzL2NoYXJ0cy5yb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdhZWRlcydcbiAgLmNvbmZpZyAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikgLT5cbiAgICAnbmdJbmplY3QnXG4gICAgJHN0YXRlUHJvdmlkZXJcblxuICAgICAgLnN0YXRlICdhcHAuaW5mb2dyYWZpY29zJyxcbiAgICAgICAgdXJsOiAnL2luZm9ncmFmaWNvcydcbiAgICAgICAgdmlld3M6XG4gICAgICAgICAgXCJcIjpcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2ZlYXR1cmVzL2NoYXJ0cy9jaGFydHMuaHRtbCdcbiAgICAgICAgICAgIGNvbnRyb2xsZXIgOiAnQ2hhcnRzQ29udHJvbGxlcidcbiAgICAgICAgICAgIHJlc29sdmU6XG4gICAgICAgICAgICAgIGZvY29zOiAoQ2hhcnRzU2VydmljZSkgLT5cbiAgICAgICAgICAgICAgICBDaGFydHNTZXJ2aWNlLmdldEZvY29zKClcbiAgICAgICAgICAgICAgcHJldmVuY29lc0J5Rm9jbzogKENoYXJ0c1NlcnZpY2UpIC0+XG4gICAgICAgICAgICAgICAgQ2hhcnRzU2VydmljZS5nZXRQcmV2ZW5jb2VzQnlGb2NvKClcblxuXG4gICAgICAuc3RhdGUgJ2FwcC5pbmZvZ3JhZmljb3MuZXhpYmljYW8nLFxuICAgICAgICB1cmw6ICcvZXhpYmljYW8nXG4gICAgICAgIHZpZXdzOlxuICAgICAgICAgIFwicmVnaW9uYWxcIjpcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2ZlYXR1cmVzL2NoYXJ0cy9yZWdpb25hbC9jaGFydC5odG1sJ1xuICAgICAgICAgICAgY29udHJvbGxlcjogJ0NoYXJ0UmVnaW9uYWxDb250cm9sbGVyJ1xuICAgICAgICAgICAgY29udHJvbGxlckFzOiAncmVnaW9uYWxDdHJsJ1xuICAgICAgICAgIFwibWVuc2FsXCI6XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9mZWF0dXJlcy9jaGFydHMvbWVuc2FsL2NoYXJ0Lmh0bWwnXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQ2hhcnRNZW5zYWxDb250cm9sbGVyJ1xuICAgICAgICAgICAgY29udHJvbGxlckFzOiAnbWVuc2FsQ3RybCdcbiAgICAgICAgICBcImVtRGlhXCI6XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9mZWF0dXJlcy9jaGFydHMvZW1EaWEvY2hhcnQuaHRtbCdcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdDaGFydEVtRGlhQ29udHJvbGxlcidcbiAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ2VtRGlhQ3RybCdcbiAgICAgICAgICBcImF0cmFzYWRhc1wiOlxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvZmVhdHVyZXMvY2hhcnRzL2F0cmFzYWRhcy9jaGFydC5odG1sJ1xuICAgICAgICAgICAgY29udHJvbGxlcjogJ0NoYXJ0QXRyYXNhZGFzQ29udHJvbGxlcidcbiAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ2F0cmFzYWRhc0N0cmwnXG5cbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlICcvaW5pY2lvJ1xuIl19