(function() {
  angular.module('aedes').config(function($stateProvider, $urlRouterProvider) {
    'ngInject';
    $stateProvider.state('app.infograficos', {
      url: '/infograficos',
      templateUrl: 'app/features/charts/charts.html',
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
    return $urlRouterProvider.otherwise('/inicio');
  });

}).call(this);
