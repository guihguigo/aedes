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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlYXR1cmVzL2NoYXJ0cy9jaGFydHMuc2VydmljZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLE9BQWYsQ0FDRSxDQUFDLE9BREgsQ0FDVyxlQURYLEVBQzRCLFNBQUMsS0FBRCxFQUFRLFNBQVIsRUFBbUIsYUFBbkI7SUFDeEI7V0FFQTtNQUFBLHNCQUFBLEVBQXdCLFNBQUE7ZUFDdEIsS0FBQSxDQUNFO1VBQUEsTUFBQSxFQUFRLEtBQVI7VUFDQSxHQUFBLEVBQVcsU0FBUyxDQUFDLFFBQVgsR0FBb0IsR0FBcEIsR0FBdUIsYUFBYSxDQUFDLFFBQXJDLEdBQThDLEdBQTlDLEdBQWlELGFBQWEsQ0FBQyxNQUR6RTtTQURGO01BRHNCLENBQXhCO01BS0Esb0JBQUEsRUFBc0IsU0FBQyxNQUFEO0FBQ3BCLFlBQUE7UUFBQSxNQUFBLEdBQVMsTUFBTSxDQUFDO1FBQ2hCLE9BQU8sTUFBTSxDQUFDO2VBRWQsS0FBQSxDQUNFO1VBQUEsTUFBQSxFQUFRLEtBQVI7VUFDQSxHQUFBLEVBQVcsU0FBUyxDQUFDLFFBQVgsR0FBb0IsR0FBcEIsR0FBdUIsYUFBYSxDQUFDLFFBQXJDLEdBQThDLEdBQTlDLEdBQWlELGFBQWEsQ0FBQyxNQUEvRCxHQUFzRSxjQUF0RSxHQUFvRixNQUQ5RjtVQUVBLElBQUEsRUFBUSxNQUZSO1NBREY7TUFKb0IsQ0FMdEI7O0VBSHdCLENBRDVCO0FBQUEiLCJmaWxlIjoiZmVhdHVyZXMvY2hhcnRzL2NoYXJ0cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ2FlZGVzJ1xuICAuc2VydmljZSAnQ2hhcnRzU2VydmljZScsICgkaHR0cCwgYXBwQ29uZmlnLCBwcmV2ZW5jb2VzVVJMKSAtPlxuICAgICduZ0luamVjdCdcblxuICAgIGdldFByZXZlbmNvZXNSZWdpb25haXM6IC0+XG4gICAgICAkaHR0cFxuICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICAgIHVybDogICAgXCIje2FwcENvbmZpZy5CQVNFX1VSTH0vI3twcmV2ZW5jb2VzVVJMLkJBU0VfVVJMfS8je3ByZXZlbmNvZXNVUkwuRVNUQURPfVwiXG5cbiAgICBnZXRQcmV2ZW5jb2VzTWVuc2FpczogKGZpZWxkcykgLT5cbiAgICAgIGZvY29JZCA9IGZpZWxkcy5mb2NvSWRcbiAgICAgIGRlbGV0ZSBmaWVsZHMuZm9jb0lkXG5cbiAgICAgICRodHRwXG4gICAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICAgICAgdXJsOiAgICBcIiN7YXBwQ29uZmlnLkJBU0VfVVJMfS8je3ByZXZlbmNvZXNVUkwuQkFTRV9VUkx9LyN7cHJldmVuY29lc1VSTC5FU1RBRE99P2NvZGlnb0ZvY289I3tmb2NvSWR9XCJcbiAgICAgICAgZGF0YSAgOiBmaWVsZHNcblxuIl19
