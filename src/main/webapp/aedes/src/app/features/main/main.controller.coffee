angular.module 'aedes'
  .controller 'MainController', ($timeout, webDevTec, toastr) ->
    'ngInject'
    vm = this

    init = ->
      setTimeout(()->
        $('.slider').slider({full_width: false})
      , 1)

      $(".button-collapse").sideNav()

    vm.appName = "Aedes"
    vm.creationDate = 328938129081
    init()

    return
