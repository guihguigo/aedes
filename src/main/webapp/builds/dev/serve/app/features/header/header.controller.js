(function() {
  angular.module('aedes').controller('HeaderController', function($timeout, toastr) {
    'ngInject';
    var init, vm;
    vm = this;
    init = function() {
      return $timeout(function() {
        return $(".button-collapse").sideNav({
          menuWidth: 300,
          edge: 'left',
          closeOnClick: true
        });
      }, 1000);
    };
    init();
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlYXR1cmVzL2hlYWRlci9oZWFkZXIuY29udHJvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLE9BQWYsQ0FDRSxDQUFDLFVBREgsQ0FDYyxrQkFEZCxFQUNrQyxTQUFDLFFBQUQsRUFBVyxNQUFYO0lBQzlCO0FBQUEsUUFBQTtJQUNBLEVBQUEsR0FBSztJQUVMLElBQUEsR0FBTyxTQUFBO2FBQ0wsUUFBQSxDQUFTLFNBQUE7ZUFDUCxDQUFBLENBQUUsa0JBQUYsQ0FBcUIsQ0FBQyxPQUF0QixDQUE4QjtVQUM1QixTQUFBLEVBQVcsR0FEaUI7VUFFNUIsSUFBQSxFQUFNLE1BRnNCO1VBRzVCLFlBQUEsRUFBYyxJQUhjO1NBQTlCO01BRE8sQ0FBVCxFQU1FLElBTkY7SUFESztJQVNQLElBQUEsQ0FBQTtFQWI4QixDQURsQztBQUFBIiwiZmlsZSI6ImZlYXR1cmVzL2hlYWRlci9oZWFkZXIuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdhZWRlcydcbiAgLmNvbnRyb2xsZXIgJ0hlYWRlckNvbnRyb2xsZXInLCAoJHRpbWVvdXQsIHRvYXN0cikgLT5cbiAgICAnbmdJbmplY3QnXG4gICAgdm0gPSB0aGlzXG5cbiAgICBpbml0ID0gLT5cbiAgICAgICR0aW1lb3V0ICgpIC0+XG4gICAgICAgICQoXCIuYnV0dG9uLWNvbGxhcHNlXCIpLnNpZGVOYXYge1xuICAgICAgICAgIG1lbnVXaWR0aDogMzAwXG4gICAgICAgICAgZWRnZTogJ2xlZnQnXG4gICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlXG4gICAgICAgIH1cbiAgICAgICwgMTAwMFxuXG4gICAgaW5pdCgpXG5cbiAgICByZXR1cm5cbiJdfQ==