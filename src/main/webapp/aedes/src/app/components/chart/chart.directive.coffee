angular.module 'aedes'
  .directive 'googleChart', ->
    'ngInject'

    directive =
        restrict : "A",
        link: ($scope, $elem, $attr) ->
          @$el = $elem[0]

          initLoader = ->
            @$el.html('HAUIDHUSADHUASHUIDAUDSHAID')

          #Function to run when the trigger is activated
          initChart = ->

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

          # Watch the scope value placed on the trigger attribute
          # if it ever flips to true, activate the chart
          $scope.$watch($attr.trigger, (val) ->
            if val is true
              do initChart
            else
              do initLoader
          )

