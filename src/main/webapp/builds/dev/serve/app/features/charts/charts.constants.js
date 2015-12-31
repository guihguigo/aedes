(function() {
  angular.module('aedes').constant('focoURL', {
    BASE_URL: 'focos'
  }).constant('prevencoesURL', {
    BASE_URL: 'prevencoes',
    ESTADO: 'estado',
    MENSAL: 'mes',
    CIDADE: 'cidade',
    FOCO: 'foco'
  }).constant('enderecoURL', {
    BASE_URL: 'enderecos',
    ESTADOS: 'estados',
    CIDADES: 'cidades',
    BAIRROS: 'bairros'
  }).constant('americanAdress', {
    street_number: 'short_name',
    route: 'long_name',
    locality: 'long_name',
    sublocality_level_1: 'long_name',
    administrative_area_level_1: 'long_name',
    administrative_area_level_2: 'long_name',
    country: 'long_name',
    postal_code: 'short_name'
  }).constant('brasilAdress', {
    street_number: 'numero',
    route: 'rua',
    sublocality_level_1: 'bairro',
    administrative_area_level_1: 'estado',
    administrative_area_level_2: 'cidade',
    locality: 'cidade',
    country: 'pais',
    postal_code: 'cep'
  });

}).call(this);
