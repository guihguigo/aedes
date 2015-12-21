angular.module 'aedes'
  .service 'UtilsService', ($http) ->
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
