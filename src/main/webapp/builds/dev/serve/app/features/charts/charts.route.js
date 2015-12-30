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
          templateUrl: 'app/features/charts/charts.html',
          controller: 'ChartsController',
          resolve: {
            focos: function(ChartsService) {
              return "lala";
            }
          }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlYXR1cmVzL2NoYXJ0cy9jaGFydHMucm91dGUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxPQUFmLENBQ0UsQ0FBQyxNQURILENBQ1UsU0FBQyxjQUFELEVBQWlCLGtCQUFqQjtJQUNOO0lBQ0EsY0FFRSxDQUFDLEtBRkgsQ0FFUyxjQUZULEVBR0k7TUFBQSxHQUFBLEVBQUssZUFBTDtNQUNBLFdBQUEsRUFBYSxpQ0FEYjtNQUVBLEtBQUEsRUFDRTtRQUFBLFFBQUEsRUFDRTtVQUFBLFdBQUEsRUFBYSxpQ0FBYjtVQUNBLFVBQUEsRUFBWSxrQkFEWjtVQUVBLFlBQUEsRUFBYyxRQUZkO1NBREY7UUFJQSxFQUFBLEVBQ0U7VUFBQSxXQUFBLEVBQWEsaUNBQWI7VUFDQSxVQUFBLEVBQWEsa0JBRGI7U0FMRjtPQUhGO0tBSEosQ0FjRSxDQUFDLEtBZEgsQ0FjUyx1QkFkVCxFQWVJO01BQUEsR0FBQSxFQUFLLFdBQUw7TUFDQSxXQUFBLEVBQWEsaUNBRGI7TUFFQSxLQUFBLEVBQ0U7UUFBQSxVQUFBLEVBQ0U7VUFBQSxXQUFBLEVBQWEseUNBQWI7VUFDQSxVQUFBLEVBQVkseUJBRFo7VUFFQSxZQUFBLEVBQWMsY0FGZDtTQURGO1FBSUEsUUFBQSxFQUNFO1VBQUEsV0FBQSxFQUFhLHVDQUFiO1VBQ0EsVUFBQSxFQUFZLHVCQURaO1VBRUEsWUFBQSxFQUFjLFlBRmQ7U0FMRjtRQVFBLE9BQUEsRUFDRTtVQUFBLFdBQUEsRUFBYSxzQ0FBYjtVQUNBLFVBQUEsRUFBWSxzQkFEWjtVQUVBLFlBQUEsRUFBYyxXQUZkO1NBVEY7UUFZQSxXQUFBLEVBQ0U7VUFBQSxXQUFBLEVBQWEsMENBQWI7VUFDQSxVQUFBLEVBQVksMEJBRFo7VUFFQSxZQUFBLEVBQWMsZUFGZDtTQWJGO09BSEY7S0FmSjtXQW1DQSxrQkFBa0IsQ0FBQyxTQUFuQixDQUE2QixHQUE3QjtFQXJDTSxDQURWO0FBQUEiLCJmaWxlIjoiZmVhdHVyZXMvY2hhcnRzL2NoYXJ0cy5yb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdhZWRlcydcbiAgLmNvbmZpZyAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikgLT5cbiAgICAnbmdJbmplY3QnXG4gICAgJHN0YXRlUHJvdmlkZXJcblxuICAgICAgLnN0YXRlICdpbmZvZ3JhZmljb3MnLFxuICAgICAgICB1cmw6ICcvaW5mb2dyYWZpY29zJ1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9mZWF0dXJlcy9jaGFydHMvY2hhcnRzLmh0bWwnXG4gICAgICAgIHZpZXdzOlxuICAgICAgICAgIFwiaGVhZGVyXCI6XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9mZWF0dXJlcy9oZWFkZXIvaGVhZGVyLmh0bWwnXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnSGVhZGVyQ29udHJvbGxlcidcbiAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ2hlYWRlcidcbiAgICAgICAgICBcIlwiOlxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvZmVhdHVyZXMvY2hhcnRzL2NoYXJ0cy5odG1sJ1xuICAgICAgICAgICAgY29udHJvbGxlciA6ICdDaGFydHNDb250cm9sbGVyJ1xuXG4gICAgICAuc3RhdGUgJ2luZm9ncmFmaWNvcy5leGliaWNhbycsXG4gICAgICAgIHVybDogJy9leGliaWNhbydcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvZmVhdHVyZXMvY2hhcnRzL2NoYXJ0cy5odG1sJ1xuICAgICAgICB2aWV3czpcbiAgICAgICAgICBcInJlZ2lvbmFsXCI6XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9mZWF0dXJlcy9jaGFydHMvcmVnaW9uYWwvY2hhcnQuaHRtbCdcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdDaGFydFJlZ2lvbmFsQ29udHJvbGxlcidcbiAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3JlZ2lvbmFsQ3RybCdcbiAgICAgICAgICBcIm1lbnNhbFwiOlxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvZmVhdHVyZXMvY2hhcnRzL21lbnNhbC9jaGFydC5odG1sJ1xuICAgICAgICAgICAgY29udHJvbGxlcjogJ0NoYXJ0TWVuc2FsQ29udHJvbGxlcidcbiAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ21lbnNhbEN0cmwnXG4gICAgICAgICAgXCJlbURpYVwiOlxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvZmVhdHVyZXMvY2hhcnRzL2VtRGlhL2NoYXJ0Lmh0bWwnXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQ2hhcnRFbURpYUNvbnRyb2xsZXInXG4gICAgICAgICAgICBjb250cm9sbGVyQXM6ICdlbURpYUN0cmwnXG4gICAgICAgICAgXCJhdHJhc2FkYXNcIjpcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2ZlYXR1cmVzL2NoYXJ0cy9hdHJhc2FkYXMvY2hhcnQuaHRtbCdcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdDaGFydEF0cmFzYWRhc0NvbnRyb2xsZXInXG4gICAgICAgICAgICBjb250cm9sbGVyQXM6ICdhdHJhc2FkYXNDdHJsJ1xuXG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSAnLydcbiJdfQ==
