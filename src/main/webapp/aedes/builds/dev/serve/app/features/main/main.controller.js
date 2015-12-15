(function() {
  angular.module('aedes').controller('MainController', function($timeout, webDevTec, toastr) {
    'ngInject';
    var init, vm;
    vm = this;
    init = function() {
      return $('.slider').slider({
        full_width: false
      });
    };
    vm.appName = "Aedes";
    init();
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29udHJvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLE9BQWYsQ0FDRSxDQUFDLFVBREgsQ0FDYyxnQkFEZCxFQUNnQyxTQUFDLFFBQUQsRUFBVyxTQUFYLEVBQXNCLE1BQXRCO0lBQzVCO0FBQUEsUUFBQTtJQUNBLEVBQUEsR0FBSztJQUVMLElBQUEsR0FBTyxTQUFBO2FBQ0wsQ0FBQSxDQUFFLFNBQUYsQ0FBWSxDQUFDLE1BQWIsQ0FBb0I7UUFBQyxVQUFBLEVBQVksS0FBYjtPQUFwQjtJQURLO0lBR1AsRUFBRSxDQUFDLE9BQUgsR0FBYTtJQUNiLElBQUEsQ0FBQTtFQVI0QixDQURoQztBQUFBIiwiZmlsZSI6Im1haW4uY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdhZWRlcydcbiAgLmNvbnRyb2xsZXIgJ01haW5Db250cm9sbGVyJywgKCR0aW1lb3V0LCB3ZWJEZXZUZWMsIHRvYXN0cikgLT5cbiAgICAnbmdJbmplY3QnXG4gICAgdm0gPSB0aGlzXG5cbiAgICBpbml0ID0gLT5cbiAgICAgICQoJy5zbGlkZXInKS5zbGlkZXIoe2Z1bGxfd2lkdGg6IGZhbHNlfSk7XG5cbiAgICB2bS5hcHBOYW1lID0gXCJBZWRlc1wiXG4gICAgaW5pdCgpXG5cbiAgICByZXR1cm5cbiJdfQ==