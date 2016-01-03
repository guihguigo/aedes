(function() {
  angular.module('aedes').service('EnderecoService', function($http, $log, appConfig, enderecoURL, americanAdress, brasilAdress) {
    'ngInject';
    return {
      getEnderecoFromLocalidade: function(locale) {
        var addressType, endereco, i, val;
        i = 0;
        endereco = {};
        while (i < locale.address_components.length) {
          addressType = locale.address_components[i].types[0];
          if (americanAdress[addressType]) {
            val = locale.address_components[i][americanAdress[addressType]];
            endereco[brasilAdress[addressType]] = val;
            $log.debug(val);
          }
          i++;
        }
        return endereco;
      },
      findAllEstados: function() {
        return $http({
          method: 'GET',
          url: appConfig.BASE_URL + "/" + enderecoURL.BASE_URL + "/" + enderecoURL.ESTADOS
        });
      },
      findCidadesByEstado: function(estado) {
        return $http({
          method: 'GET',
          url: appConfig.BASE_URL + "/" + enderecoURL.BASE_URL + "/" + enderecoURL.CIDADES + "?estado=" + estado
        });
      },
      findBairrosByCidadeAndEstado: function(estado, cidade) {
        return $http({
          method: 'GET',
          url: appConfig.BASE_URL + "/" + enderecoURL.BASE_URL + "/" + enderecoURL.BAIRROS + "?estado=" + estado + "&cidade=" + cidade
        });
      }
    };
  });

}).call(this);
