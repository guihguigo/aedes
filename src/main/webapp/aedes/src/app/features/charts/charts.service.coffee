angular.module 'aedes'
  .service 'ChartsService', ($http, appConfig, prevencoesUrl) ->
    'ngInject'

    objectToArray: (obj) ->
      mappedRows = []
      _.each obj, (month) ->
        map = []

        _.map month, (m, key) ->
          if key != 'descricao'
            map.push m

        mappedRows.push map

      return mappedRows

    getPrevencoesRegionais: ->
      $http
        method: 'GET'
        url:    "#{appConfig.BASE_URL}/#{prevencoesUrl.BASE_URL}/#{prevencoesUrl.ESTADO}"

    getPrevencoesMensais: ->
      $http
        method: 'GET'
        url:    "#{appConfig.BASE_URL}/#{prevencoesUrl.BASE_URL}/#{prevencoesUrl.ESTADO}"

