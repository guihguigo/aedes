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

    getMonthPTBR: (index) ->
      NomeMes = new Array(12)
      NomeMes[0] = "Janeiro"
      NomeMes[1] = "Fevereiro"
      NomeMes[2] = "Março"
      NomeMes[3] = "Abril"
      NomeMes[4] = "Maio"
      NomeMes[5] = "Junho"
      NomeMes[6] = "Julho"
      NomeMes[7] = "Agosto"
      NomeMes[8] = "Setembro"
      NomeMes[9] = "Outubro"
      NomeMes[10] = "Novembro"
      NomeMes[11] = "Dezembro"

      return NomeMes[index]
