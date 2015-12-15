angular.module 'aedes'
  .config ($stateProvider, $urlRouterProvider) ->
    'ngInject'

    $stateProvider
      .state 'chartMensal',
        url: '/chart/mensal'
        templateUrl: 'app/features/chartMensal/chart.html'
        controller: 'ChartMensalController'
        controllerAs: 'chartMensal'

    $urlRouterProvider.otherwise '/'
