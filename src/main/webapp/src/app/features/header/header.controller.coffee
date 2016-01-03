angular.module 'aedes'
  .controller 'HeaderController', ($timeout, toastr) ->
    'ngInject'
    vm = this

    init = ->
      $timeout () ->
        $(".button-collapse").sideNav {
          menuWidth: 300
          edge: 'left'
          closeOnClick: true
        }
      , 1000

    init()

    return
