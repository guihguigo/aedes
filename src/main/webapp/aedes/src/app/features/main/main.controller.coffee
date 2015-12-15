angular.module 'aedes'
  .controller 'MainController', ($timeout, webDevTec, toastr) ->
    'ngInject'
    vm = this

    init = ->
      $('.slider').slider({full_width: false});

    vm.appName = "Aedes"
    init()

    return
