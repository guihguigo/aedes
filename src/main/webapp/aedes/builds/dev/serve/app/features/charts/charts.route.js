(function() {
  angular.module('aedes').config(function($stateProvider, $urlRouterProvider) {
    'ngInject';
    $stateProvider.state('infograficos', {
      url: '/infograficos',
      templateUrl: 'app/features/charts/charts.html',
      views: {
        "header": {
          templateUrl: 'app/features/header/header.html',
          controller: 'HeaderController',
          controllerAs: 'header'
        },
        "": {
          templateUrl: 'app/features/charts/charts.html'
        }
      }
    }).state('infograficos.exibicao', {
      url: '/exibicao',
      templateUrl: 'app/features/charts/charts.html',
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
    return $urlRouterProvider.otherwise('/');
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlYXR1cmVzL2NoYXJ0cy9jaGFydHMucm91dGUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxPQUFmLENBQ0UsQ0FBQyxNQURILENBQ1UsU0FBQyxjQUFELEVBQWlCLGtCQUFqQjtJQUNOO0lBQ0EsY0FDRSxDQUFDLEtBREgsQ0FDUyxjQURULEVBRUk7TUFBQSxHQUFBLEVBQUssZUFBTDtNQUNBLFdBQUEsRUFBYSxpQ0FEYjtNQUVBLEtBQUEsRUFDRTtRQUFBLFFBQUEsRUFDRTtVQUFBLFdBQUEsRUFBYSxpQ0FBYjtVQUNBLFVBQUEsRUFBWSxrQkFEWjtVQUVBLFlBQUEsRUFBYyxRQUZkO1NBREY7UUFJQSxFQUFBLEVBQ0U7VUFBQSxXQUFBLEVBQWEsaUNBQWI7U0FMRjtPQUhGO0tBRkosQ0FZRSxDQUFDLEtBWkgsQ0FZUyx1QkFaVCxFQWFJO01BQUEsR0FBQSxFQUFLLFdBQUw7TUFDQSxXQUFBLEVBQWEsaUNBRGI7TUFFQSxLQUFBLEVBQ0U7UUFBQSxVQUFBLEVBQ0U7VUFBQSxXQUFBLEVBQWEseUNBQWI7VUFDQSxVQUFBLEVBQVkseUJBRFo7VUFFQSxZQUFBLEVBQWMsY0FGZDtTQURGO1FBSUEsUUFBQSxFQUNFO1VBQUEsV0FBQSxFQUFhLHVDQUFiO1VBQ0EsVUFBQSxFQUFZLHVCQURaO1VBRUEsWUFBQSxFQUFjLFlBRmQ7U0FMRjtRQVFBLE9BQUEsRUFDRTtVQUFBLFdBQUEsRUFBYSxzQ0FBYjtVQUNBLFVBQUEsRUFBWSxzQkFEWjtVQUVBLFlBQUEsRUFBYyxXQUZkO1NBVEY7UUFZQSxXQUFBLEVBQ0U7VUFBQSxXQUFBLEVBQWEsMENBQWI7VUFDQSxVQUFBLEVBQVksMEJBRFo7VUFFQSxZQUFBLEVBQWMsZUFGZDtTQWJGO09BSEY7S0FiSjtXQWlDQSxrQkFBa0IsQ0FBQyxTQUFuQixDQUE2QixHQUE3QjtFQW5DTSxDQURWO0FBQUEiLCJmaWxlIjoiZmVhdHVyZXMvY2hhcnRzL2NoYXJ0cy5yb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdhZWRlcydcbiAgLmNvbmZpZyAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikgLT5cbiAgICAnbmdJbmplY3QnXG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSAnaW5mb2dyYWZpY29zJyxcbiAgICAgICAgdXJsOiAnL2luZm9ncmFmaWNvcydcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvZmVhdHVyZXMvY2hhcnRzL2NoYXJ0cy5odG1sJ1xuICAgICAgICB2aWV3czpcbiAgICAgICAgICBcImhlYWRlclwiOlxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvZmVhdHVyZXMvaGVhZGVyL2hlYWRlci5odG1sJ1xuICAgICAgICAgICAgY29udHJvbGxlcjogJ0hlYWRlckNvbnRyb2xsZXInXG4gICAgICAgICAgICBjb250cm9sbGVyQXM6ICdoZWFkZXInXG4gICAgICAgICAgXCJcIjpcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2ZlYXR1cmVzL2NoYXJ0cy9jaGFydHMuaHRtbCdcblxuICAgICAgLnN0YXRlICdpbmZvZ3JhZmljb3MuZXhpYmljYW8nLFxuICAgICAgICB1cmw6ICcvZXhpYmljYW8nXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2ZlYXR1cmVzL2NoYXJ0cy9jaGFydHMuaHRtbCdcbiAgICAgICAgdmlld3M6XG4gICAgICAgICAgXCJyZWdpb25hbFwiOlxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvZmVhdHVyZXMvY2hhcnRzL3JlZ2lvbmFsL2NoYXJ0Lmh0bWwnXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQ2hhcnRSZWdpb25hbENvbnRyb2xsZXInXG4gICAgICAgICAgICBjb250cm9sbGVyQXM6ICdyZWdpb25hbEN0cmwnXG4gICAgICAgICAgXCJtZW5zYWxcIjpcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2ZlYXR1cmVzL2NoYXJ0cy9tZW5zYWwvY2hhcnQuaHRtbCdcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdDaGFydE1lbnNhbENvbnRyb2xsZXInXG4gICAgICAgICAgICBjb250cm9sbGVyQXM6ICdtZW5zYWxDdHJsJ1xuICAgICAgICAgIFwiZW1EaWFcIjpcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2ZlYXR1cmVzL2NoYXJ0cy9lbURpYS9jaGFydC5odG1sJ1xuICAgICAgICAgICAgY29udHJvbGxlcjogJ0NoYXJ0RW1EaWFDb250cm9sbGVyJ1xuICAgICAgICAgICAgY29udHJvbGxlckFzOiAnZW1EaWFDdHJsJ1xuICAgICAgICAgIFwiYXRyYXNhZGFzXCI6XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9mZWF0dXJlcy9jaGFydHMvYXRyYXNhZGFzL2NoYXJ0Lmh0bWwnXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQ2hhcnRBdHJhc2FkYXNDb250cm9sbGVyJ1xuICAgICAgICAgICAgY29udHJvbGxlckFzOiAnYXRyYXNhZGFzQ3RybCdcblxuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UgJy8nXG4iXX0=