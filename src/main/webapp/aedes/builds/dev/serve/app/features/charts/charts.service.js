(function() {
  angular.module('aedes').service('ChartsService', function($http, appConfig, prevencoesUrl) {
    'ngInject';
    return {
      objectToArray: function(obj) {
        var mappedRows;
        mappedRows = [];
        _.each(obj, function(month) {
          var map;
          map = [];
          _.map(month, function(m, key) {
            if (key !== 'descricao') {
              return map.push(m);
            }
          });
          return mappedRows.push(map);
        });
        return mappedRows;
      },
      getPrevencoesRegionais: function() {
        return $http({
          method: 'GET',
          url: appConfig.BASE_URL + "/" + prevencoesUrl.BASE_URL + "/" + prevencoesUrl.ESTADO
        });
      },
      getPrevencoesMensais: function() {
        return $http({
          method: 'GET',
          url: appConfig.BASE_URL + "/" + prevencoesUrl.BASE_URL + "/" + prevencoesUrl.ESTADO
        });
      }
    };
  });

}).call(this);
