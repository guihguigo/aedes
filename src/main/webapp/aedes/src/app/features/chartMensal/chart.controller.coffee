angular.module 'aedes'
  .controller 'ChartMensalController', ($timeout, webDevTec, toastr) ->
    'ngInject'
    vm = @

    init = ->
      console.log 'XANA'

    vm.creationDate = 1450051459657
    vm.teste        = 'teeste'
    init()

    return
