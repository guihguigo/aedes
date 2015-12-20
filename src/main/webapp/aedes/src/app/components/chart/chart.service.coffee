angular.module 'aedes'
  .factory 'ChartService', ($log, $http) ->
    'ngInject'

    loadGoogleVisualization: () ->

      try
        google.load("visualization", "1.1", {packages: ["bar", "corechart"]})
      catch e
        console.log 'Could not load Google lib', e
        return false


