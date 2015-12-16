angular.module 'aedes'
  .factory 'ChartService', ($log, $http) ->
    'ngInject'

    loadGoogleVisualization: () ->

      try
        google.load('visualization', '1', {
          'callback':'console.log(\'success\');',
          'packages':['corechart']
        })

        return true
      catch e
        console.log 'Could not load Google lib', e
        return false


