angular.module 'aedes'
  .service 'EnderecoService', ($http, $log, appConfig, enderecoURL, americanAdress, brasilAdress) ->
    'ngInject'

    getEnderecoFromLocalidade: (locale) ->
      i = 0
      endereco = {}
      while i < locale.address_components.length
        addressType = locale.address_components[i].types[0]
        if americanAdress[addressType]
          val = locale.address_components[i][americanAdress[addressType]]
          endereco[brasilAdress[addressType]] = val
          $log.debug val
        i++

      endereco

    findAllEstados: ->
      $http
        method: 'GET'
        url:    "#{appConfig.BASE_URL}/#{enderecoURL.BASE_URL}/#{enderecoURL.ESTADOS}"

    findCidadesByEstado: (estado) ->
      $http
        method: 'GET'
        url:    "#{appConfig.BASE_URL}/#{enderecoURL.BASE_URL}/#{enderecoURL.CIDADES}?estado=#{estado}"

    findBairrosByCidadeAndEstado: (estado, cidade) ->
      $http
        method: 'GET'
        url:    "#{appConfig.BASE_URL}/#{enderecoURL.BASE_URL}/#{enderecoURL.BAIRROS}?estado=#{estado}&cidade=#{cidade}"


