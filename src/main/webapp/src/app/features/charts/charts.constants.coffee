angular.module('aedes')
  .constant('prevencoesURL', {
    BASE_URL :  'prevencoes'
    ESTADO   :  'estado'
    MENSAL   :  'mensal'
  })
  .constant('enderecoURL', {
    BASE_URL :  'enderecos'
    ESTADOS  :  'estados'
    CIDADES  :  'cidades'
    BAIRROS  :  'bairros'
  })
  .constant('americanAdress', {
    street_number: 'short_name'
    route: 'long_name'
    locality: 'long_name'
    administrative_area_level_1: 'long_name'
    country: 'long_name'
    postal_code: 'short_name'
  })
  .constant('brasilAdress', {
    street_number: 'numero'
    route: 'rua'
    sublocality_level_1: 'bairro'
    locality: 'cidade'
    administrative_area_level_1: 'estado'
    country: 'pais'
    postal_code: 'cep'
  })


