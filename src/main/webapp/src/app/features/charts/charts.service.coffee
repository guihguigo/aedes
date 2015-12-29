angular.module 'aedes'
  .service 'ChartsService', ($http, appConfig, prevencoesURL) ->
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
      focoId = fields.focoId
      delete fields.focoId

      $http
        method: 'GET'
        url:    "#{appConfig.BASE_URL}/#{prevencoesURL.BASE_URL}/#{prevencoesURL.ESTADO}?codigoFoco=#{focoId}"
        data  : fields

    getFocos: ->
      $http
        method: 'GET'
        url   : "#{appConfig.BASE_URL}/#{focoURL.BASE_URL}"

