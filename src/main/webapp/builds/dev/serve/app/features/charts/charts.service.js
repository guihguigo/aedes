(function() {
  angular.module('aedes').service('ChartsService', function($http, appConfig, prevencoesURL) {
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
        var focoId;
        focoId = fields.focoId;
        delete fields.focoId;
        return $http({
          method: 'GET',
          url: appConfig.BASE_URL + "/" + prevencoesURL.BASE_URL + "/" + prevencoesURL.ESTADO + "?codigoFoco=" + focoId,
          data: fields
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
