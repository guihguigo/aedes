(function() {
  angular.module('aedes').service('ChartsService', function($http, appConfig, prevencoesUrl) {
    'ngInject';
    return {
      getPrevencoesRegionais: function() {
        return $http({
          method: 'GET',
          url: appConfig.BASE_URL + "/" + prevencoesUrl.BASE_URL + "/" + prevencoesUrl.ESTADO
        });
      },
      getPrevencoesMensais: function(fields) {
        var focoId;
        focoId = fields.focoId;
        delete fields.focoId;
        return $http({
          method: 'GET',
          url: appConfig.BASE_URL + "/" + prevencoesUrl.BASE_URL + "/" + prevencoesUrl.ESTADO + "?codigoFoco=" + focoId,
          data: fields
        });
      }
    };
  });

}).call(this);
