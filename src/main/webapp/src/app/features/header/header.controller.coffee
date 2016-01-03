angular.module 'aedes'
  .controller 'HeaderController', ($timeout, webDevTec, toastr) ->
    'ngInject'
    vm = this

    init = ->
      $timeout () ->
        $(".button-collapse").sideNav {
          menuWidth: 300
          edge: 'left'
          closeOnClick: false
        }
      , 1000

    init()

    return
