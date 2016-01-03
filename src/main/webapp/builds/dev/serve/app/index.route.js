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
