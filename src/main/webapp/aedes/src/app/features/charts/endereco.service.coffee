angular.module 'aedes'
  .service 'EnderecoService', ($http, appConfig, prevencoesUrl, enderecoURL) ->
    'ngInject'

    findAllEstados: ->
      $http
        method: 'GET'
        url:    "#{appConfig.BASE_URL}/#{enderecoURL.BASE_URL}/#{enderecoURL.ESTADOS}"

    findCidadesByEstado: (estado) ->
      $http
        method: 'GET'
        url:    "#{appConfig.BASE_URL}/#{enderecoURL.BASE_URL}/#{enderecoURL.CIDADE}?estado=#{estado}"

    findBairrosByCidadeAndEstado: (estado, cidade) ->
      $http
        method: 'GET'
        url:    "#{appConfig.BASE_URL}/#{enderecoURL.BASE_URL}/#{enderecoURL.CIDADE}?estado=#{estado}&cidade=#{cidade}"


