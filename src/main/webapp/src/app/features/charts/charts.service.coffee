angular.module 'aedes'
  .service 'ChartsService', ($http, appConfig, prevencoesURL, focoURL) ->
    'ngInject'

    getPrevencoesRegionais: ->
      $http
        method: 'GET'
        url:    "#{appConfig.BASE_URL}/#{prevencoesURL.BASE_URL}/#{prevencoesURL.ESTADO}"

    getPrevencoesByFoco: ->
      $http
        method: 'GET'
        url:    "#{appConfig.BASE_URL}/#{prevencoesURL.BASE_URL}/#{prevencoesURL.FOCO}"

    getPrevencoesEmCidades: ->
      $http
        method: 'GET'
        url:    "#{appConfig.BASE_URL}/#{prevencoesURL.BASE_URL}/#{prevencoesURL.CIDADE}"

    getPrevencoesMensais: (fields) ->
      params = {}
      params.codigoFoco = fields.focoId
      params.bairro = fields.endereco?.bairro
      params.cidade = fields.endereco?.cidade
      params.estado = fields.endereco?.estado

      $http
        method: 'GET'
        url   : "#{appConfig.BASE_URL}/#{prevencoesURL.BASE_URL}/#{prevencoesURL.MENSAL}"
        params  :
          params

    getFocos: ->
      $http
        method: 'GET'
        url   : "#{appConfig.BASE_URL}/#{focoURL.BASE_URL}"

