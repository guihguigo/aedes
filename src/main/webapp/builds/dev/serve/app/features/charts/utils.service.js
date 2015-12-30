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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlYXR1cmVzL2NoYXJ0cy91dGlscy5zZXJ2aWNlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsT0FBZixDQUNFLENBQUMsT0FESCxDQUNXLGNBRFgsRUFDMkIsU0FBQyxLQUFEO0lBQ3ZCO1dBRUE7TUFBQSxhQUFBLEVBQWUsU0FBQyxHQUFEO0FBQ2IsWUFBQTtRQUFBLFVBQUEsR0FBYTtRQUNiLENBQUMsQ0FBQyxJQUFGLENBQU8sR0FBUCxFQUFZLFNBQUMsS0FBRDtBQUNWLGNBQUE7VUFBQSxHQUFBLEdBQU07VUFFTixDQUFDLENBQUMsR0FBRixDQUFNLEtBQU4sRUFBYSxTQUFDLENBQUQsRUFBSSxHQUFKO1lBQ1gsSUFBRyxHQUFBLEtBQU8sV0FBVjtxQkFDRSxHQUFHLENBQUMsSUFBSixDQUFTLENBQVQsRUFERjs7VUFEVyxDQUFiO2lCQUlBLFVBQVUsQ0FBQyxJQUFYLENBQWdCLEdBQWhCO1FBUFUsQ0FBWjtBQVNBLGVBQU87TUFYTSxDQUFmOztFQUh1QixDQUQzQjtBQUFBIiwiZmlsZSI6ImZlYXR1cmVzL2NoYXJ0cy91dGlscy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ2FlZGVzJ1xuICAuc2VydmljZSAnVXRpbHNTZXJ2aWNlJywgKCRodHRwKSAtPlxuICAgICduZ0luamVjdCdcblxuICAgIG9iamVjdFRvQXJyYXk6IChvYmopIC0+XG4gICAgICBtYXBwZWRSb3dzID0gW11cbiAgICAgIF8uZWFjaCBvYmosIChtb250aCkgLT5cbiAgICAgICAgbWFwID0gW11cblxuICAgICAgICBfLm1hcCBtb250aCwgKG0sIGtleSkgLT5cbiAgICAgICAgICBpZiBrZXkgIT0gJ2Rlc2NyaWNhbydcbiAgICAgICAgICAgIG1hcC5wdXNoIG1cblxuICAgICAgICBtYXBwZWRSb3dzLnB1c2ggbWFwXG5cbiAgICAgIHJldHVybiBtYXBwZWRSb3dzXG4iXX0=