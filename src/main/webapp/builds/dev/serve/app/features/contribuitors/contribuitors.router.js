(function() {
  angular.module('aedes').config(function($stateProvider, $urlRouterProvider) {
    'ngInject';
    $stateProvider.state('app.contribuidores', {
      url: '/contribuidores',
      views: {
        "": {
          templateUrl: 'app/features/contribuitors/contribuitors.html',
          controller: 'ContribuitorsController',
          resolve: {
            contribuitors: function(githubContributor) {
              return githubContributor.getContributors();
            }
          }
        }
      }
    });
    return $urlRouterProvider.otherwise('/inicio');
  });

}).call(this);
