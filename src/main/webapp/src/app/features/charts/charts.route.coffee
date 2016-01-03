angular.module 'aedes'
  .config ($stateProvider, $urlRouterProvider) ->
    'ngInject'
    $stateProvider

      .state 'app.infograficos',
        url: '/infograficos'
        views:
          "":
            templateUrl: 'app/features/charts/charts.html'
            controller : 'ChartsController'
            resolve:
              focos: (ChartsService) ->
                ChartsService.getFocos()
              prevencoesByFoco: (ChartsService) ->
                ChartsService.getPrevencoesByFoco()


      .state 'app.infograficos.exibicao',
        url: '/exibicao'
        views:
          "regional":
            templateUrl: 'app/features/charts/regional/chart.html'
            controller: 'ChartRegionalController'
            controllerAs: 'regionalCtrl'
          "mensal":
            templateUrl: 'app/features/charts/mensal/chart.html'
            controller: 'ChartMensalController'
            controllerAs: 'mensalCtrl'
          "emDia":
            templateUrl: 'app/features/charts/emDia/chart.html'
            controller: 'ChartEmDiaController'
            controllerAs: 'emDiaCtrl'
          "atrasadas":
            templateUrl: 'app/features/charts/atrasadas/chart.html'
            controller: 'ChartAtrasadasController'
            controllerAs: 'atrasadasCtrl'

    $urlRouterProvider.otherwise '/inicio'
