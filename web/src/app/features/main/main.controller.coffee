angular.module 'aedes'
  .controller 'MainController', ($timeout, $scope, appConfig) ->
    'ngInject'
    vm = this

    init = ->
      $timeout () ->
        $('.slider').slider {full_width: false}
      , 100

      do checkBrowser

    checkBrowser = ->
      if isMobile.iOS()
        $scope.storeLink = "https://play.google.com/store/apps/details?id=com.aedesapp"
      else
        $scope.storeLink = "https://play.google.com/store/apps/details?id=com.aedesapp"


    isMobile = {
      Android: ->
        navigator.userAgent.match(/Android/i)
      BlackBerry: ->
        navigator.userAgent.match(/BlackBerry/i)
      iOS: ->
        navigator.userAgent.match(/iPhone|iPad|iPod/i)
      Opera: ->
        navigator.userAgent.match(/Opera Mini/i)
      Windows: ->
        navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i)
      any: ->
        (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows())
    }

    $scope.appName = appConfig.NAME

    do init

    return
