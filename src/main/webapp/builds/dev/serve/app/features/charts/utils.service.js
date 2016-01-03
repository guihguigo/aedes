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
      }
    };
  });

}).call(this);
