(function() {
  angular.module('aedes').service('EnderecoService', function($http, appConfig, prevencoesUrl, enderecoURL) {
    'ngInject';
    return {
      findAllEstados: function() {
        return $http({
          method: 'GET',
          url: appConfig.BASE_URL + "/" + enderecoURL.BASE_URL + "/" + enderecoURL.ESTADOS
        });
      },
      findCidadesByEstado: function(estado) {
        return $http({
          method: 'GET',
          url: appConfig.BASE_URL + "/" + enderecoURL.BASE_URL + "/" + enderecoURL.CIDADE + "?estado=" + estado
        });
      },
      findBairrosByCidadeAndEstado: function(estado, cidade) {
        return $http({
          method: 'GET',
          url: appConfig.BASE_URL + "/" + enderecoURL.BASE_URL + "/" + enderecoURL.CIDADE + "?estado=" + estado + "&cidade=" + cidade
        });
      }
    };
  });

}).call(this);
