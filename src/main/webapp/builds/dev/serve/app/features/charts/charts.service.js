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
      getPrevencoesMensais: function(fields) {
        var focoId;
        focoId = fields.focoId;
        delete fields.focoId;
        return $http({
          method: 'GET',
          url: appConfig.BASE_URL + "/" + prevencoesURL.BASE_URL + "/" + prevencoesURL.ESTADO + "?codigoFoco=" + focoId,
          data: fields
        });
      }
    };
  });

}).call(this);
