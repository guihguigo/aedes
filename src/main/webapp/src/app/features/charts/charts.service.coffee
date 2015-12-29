angular.module 'aedes'
  .service 'ChartsService', ($http, appConfig, prevencoesURL) ->
    'ngInject'

    getPrevencoesRegionais: ->
      $http
        method: 'GET'
        url:    "#{appConfig.BASE_URL}/#{prevencoesURL.BASE_URL}/#{prevencoesURL.ESTADO}"

    getPrevencoesMensais: (fields) ->
      focoId = fields.focoId
      delete fields.focoId

      $http
        method: 'GET'
        url:    "#{appConfig.BASE_URL}/#{prevencoesURL.BASE_URL}/#{prevencoesURL.ESTADO}?codigoFoco=#{focoId}"
        data  : fields

