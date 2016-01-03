(function() {
  angular.module('aedes').service('ChartsService', function($http, appConfig, prevencoesURL, focoURL) {
    'ngInject';
    return {
      getPrevencoesRegionais: function() {
        return $http({
          method: 'GET',
          url: appConfig.BASE_URL + "/" + prevencoesURL.BASE_URL + "/" + prevencoesURL.ESTADO
        });
      },
      getPrevencoesByFoco: function() {
        return $http({
          method: 'GET',
          url: appConfig.BASE_URL + "/" + prevencoesURL.BASE_URL + "/" + prevencoesURL.FOCO
        });
      },
      getPrevencoesEmCidades: function() {
        return $http({
          method: 'GET',
          url: appConfig.BASE_URL + "/" + prevencoesURL.BASE_URL + "/" + prevencoesURL.CIDADE
        });
      },
      getPrevencoesMensais: function(fields) {
        var params, ref, ref1, ref2;
        params = {};
        params.codigoFoco = fields.focoId;
        params.bairro = (ref = fields.endereco) != null ? ref.bairro : void 0;
        params.cidade = (ref1 = fields.endereco) != null ? ref1.cidade : void 0;
        params.estado = (ref2 = fields.endereco) != null ? ref2.estado : void 0;
        return $http({
          method: 'GET',
          url: appConfig.BASE_URL + "/" + prevencoesURL.BASE_URL + "/" + prevencoesURL.MENSAL,
          params: params
        });
      },
      getFocos: function() {
        return $http({
          method: 'GET',
          url: appConfig.BASE_URL + "/" + focoURL.BASE_URL
        });
      }
    };
  });

}).call(this);
