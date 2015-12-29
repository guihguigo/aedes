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
