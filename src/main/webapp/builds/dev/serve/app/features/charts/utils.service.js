(function() {
  angular.module('aedes').service('UtilsService', function($http) {
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
      getMonthPTBR: function(index) {
        var NomeMes;
        NomeMes = new Array(12);
        NomeMes[0] = "Janeiro";
        NomeMes[1] = "Fevereiro";
        NomeMes[2] = "Março";
        NomeMes[3] = "Abril";
        NomeMes[4] = "Maio";
        NomeMes[5] = "Junho";
        NomeMes[6] = "Julho";
        NomeMes[7] = "Agosto";
        NomeMes[8] = "Setembro";
        NomeMes[9] = "Outubro";
        NomeMes[10] = "Novembro";
        NomeMes[11] = "Dezembro";
        return NomeMes[index - 1];
      }
    };
  });

}).call(this);
