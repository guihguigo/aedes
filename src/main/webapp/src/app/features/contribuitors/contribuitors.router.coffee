angular.module 'aedes'
  .config ($stateProvider, $urlRouterProvider) ->
    'ngInject'
    $stateProvider

      .state 'app.contribuidores',
        url: '/contribuidores'
        views:
          "":
            templateUrl: 'app/features/contribuitors/contribuitors.html'
            controller : 'ContribuitorsController'
            resolve:
              contribuitors: (githubContributor) ->
                githubContributor.getContributors()

    $urlRouterProvider.otherwise '/inicio'
