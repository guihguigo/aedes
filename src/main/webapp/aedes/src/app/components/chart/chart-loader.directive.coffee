angular.module 'aedes'
  .directive 'googleChart', ->
    'ngInject'

    directive =
        restrict : "A",
        templateUrl: 'app/components/chart/chart.html'
        link: ($scope, $elem, $attr) ->

          initLoader = =>
            $scope.loader = true

          #Function to run when the trigger is activated
          initChart = ->
            $scope.loader = false

            setTimeout () ->
                @$el = $($elem[0]).find('.chart-directive')[0]

                # Run $eval on the $scope model passed
                # as an HTML attribute
                model = $scope.$eval $attr.ngModel

                #If the model is defined on the scope,
                #grab the dataTable that was set up
                #during the Google Loader callback
                #function, and draw the chart
                if model
                  dt = model.data
                  options = model.options
                  chartType = $attr.googleChart

                  googleChart = new google.visualization[chartType] @$el
                  googleChart.draw dt,options
              , 100


          # Watch the scope value placed on the trigger attribute
          # if it ever flips to true, activate the chart
          $scope.$watch 'dataModel.activateChart', (val) ->
            if val? and val
              do initChart
            else
              do initLoader

