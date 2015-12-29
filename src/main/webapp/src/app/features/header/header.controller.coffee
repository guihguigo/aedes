angular.module 'aedes'
  .controller 'HeaderController', ($timeout, webDevTec, toastr) ->
    'ngInject'
    vm = this

    init = ->
      $(".button-collapse").sideNav()

    vm.appName = "Aedes"
    init()

    return
