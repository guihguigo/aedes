angular.module 'aedes'
  .service 'ChartsService', ($http, appConfig, prevencoesUrl) ->
    'ngInject'

    getPrevencoesRegionais: ->
      $http
        method: 'GET'
        url:    "#{appConfig.BASE_URL}/#{prevencoesUrl.BASE_URL}/#{prevencoesUrl.ESTADO}"

    getPrevencoesMensais: (fields) ->
      focoId = fields.focoId
      delete fields.focoId

      $http
        method: 'GET'
        url:    "#{appConfig.BASE_URL}/#{prevencoesUrl.BASE_URL}/#{prevencoesUrl.ESTADO}?codigoFoco=#{focoId}"
        data  : fields

