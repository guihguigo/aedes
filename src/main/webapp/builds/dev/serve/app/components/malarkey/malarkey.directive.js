(function() {
  angular.module('aedes').directive('acmeMalarkey', function() {
    var MalarkeyController, directive, linkFunc;
    MalarkeyController = function($log, githubContributor) {
      'ngInject';
      var activate, getContributors, vm;
      vm = this;
      activate = function() {
        return getContributors().then(function() {
          $log.info('Activated Contributors View');
        });
      };
      getContributors = function() {
        return githubContributor.getContributors(10).then(function(data) {
          vm.contributors = data;
          return vm.contributors;
        });
      };
      vm.contributors = [];
      activate();
    };
    linkFunc = function(scope, el, attr, vm) {
      var typist, watcher;
      watcher = void 0;
      typist = malarkey(el[0], {
        typeSpeed: 40,
        deleteSpeed: 40,
        pauseDelay: 800,
        loop: true,
        postfix: ' '
      });
      el.addClass('acme-malarkey');
      angular.forEach(scope.extraValues, function(value) {
        typist.type(value).pause()["delete"]();
      });
      watcher = scope.$watch('vm.contributors', function() {
        angular.forEach(vm.contributors, function(contributor) {
          typist.type(contributor.login).pause()["delete"]();
        });
      });
      scope.$on('$destroy', function() {
        watcher();
      });
    };
    return directive = {
      restrict: 'E',
      scope: {
        extraValues: '='
      },
      template: '&nbsp;',
      link: linkFunc,
      controller: MalarkeyController,
      controllerAs: 'vm'
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsT0FBZixDQUNFLENBQUMsU0FESCxDQUNhLGNBRGIsRUFDNkIsU0FBQTtBQUV6QixRQUFBO0lBQUEsa0JBQUEsR0FBcUIsU0FBQyxJQUFELEVBQU8saUJBQVA7TUFDbkI7QUFBQSxVQUFBO01BQ0EsRUFBQSxHQUFLO01BRUwsUUFBQSxHQUFXLFNBQUE7ZUFDVCxlQUFBLENBQUEsQ0FBaUIsQ0FBQyxJQUFsQixDQUF1QixTQUFBO1VBQ3JCLElBQUksQ0FBQyxJQUFMLENBQVUsNkJBQVY7UUFEcUIsQ0FBdkI7TUFEUztNQUtYLGVBQUEsR0FBa0IsU0FBQTtlQUNoQixpQkFBaUIsQ0FBQyxlQUFsQixDQUFrQyxFQUFsQyxDQUFxQyxDQUFDLElBQXRDLENBQTJDLFNBQUMsSUFBRDtVQUN6QyxFQUFFLENBQUMsWUFBSCxHQUFrQjtpQkFDbEIsRUFBRSxDQUFDO1FBRnNDLENBQTNDO01BRGdCO01BS2xCLEVBQUUsQ0FBQyxZQUFILEdBQWtCO01BQ2xCLFFBQUEsQ0FBQTtJQWZtQjtJQWtCckIsUUFBQSxHQUFXLFNBQUMsS0FBRCxFQUFRLEVBQVIsRUFBWSxJQUFaLEVBQWtCLEVBQWxCO0FBQ1QsVUFBQTtNQUFBLE9BQUEsR0FBVTtNQUNWLE1BQUEsR0FBUyxRQUFBLENBQVMsRUFBRyxDQUFBLENBQUEsQ0FBWixFQUNQO1FBQUEsU0FBQSxFQUFXLEVBQVg7UUFDQSxXQUFBLEVBQWEsRUFEYjtRQUVBLFVBQUEsRUFBWSxHQUZaO1FBR0EsSUFBQSxFQUFNLElBSE47UUFJQSxPQUFBLEVBQVMsR0FKVDtPQURPO01BTVQsRUFBRSxDQUFDLFFBQUgsQ0FBWSxlQUFaO01BQ0EsT0FBTyxDQUFDLE9BQVIsQ0FBZ0IsS0FBSyxDQUFDLFdBQXRCLEVBQW1DLFNBQUMsS0FBRDtRQUNqQyxNQUFNLENBQUMsSUFBUCxDQUFZLEtBQVosQ0FBa0IsQ0FBQyxLQUFuQixDQUFBLENBQTBCLENBQUMsUUFBRCxDQUExQixDQUFBO01BRGlDLENBQW5DO01BR0EsT0FBQSxHQUFVLEtBQUssQ0FBQyxNQUFOLENBQWEsaUJBQWIsRUFBZ0MsU0FBQTtRQUN4QyxPQUFPLENBQUMsT0FBUixDQUFnQixFQUFFLENBQUMsWUFBbkIsRUFBaUMsU0FBQyxXQUFEO1VBQy9CLE1BQU0sQ0FBQyxJQUFQLENBQVksV0FBVyxDQUFDLEtBQXhCLENBQThCLENBQUMsS0FBL0IsQ0FBQSxDQUFzQyxDQUFDLFFBQUQsQ0FBdEMsQ0FBQTtRQUQrQixDQUFqQztNQUR3QyxDQUFoQztNQU1WLEtBQUssQ0FBQyxHQUFOLENBQVUsVUFBVixFQUFzQixTQUFBO1FBQ3BCLE9BQUEsQ0FBQTtNQURvQixDQUF0QjtJQWxCUztXQXVCWCxTQUFBLEdBQ0U7TUFBQSxRQUFBLEVBQVUsR0FBVjtNQUNBLEtBQUEsRUFBTztRQUFBLFdBQUEsRUFBYSxHQUFiO09BRFA7TUFFQSxRQUFBLEVBQVUsUUFGVjtNQUdBLElBQUEsRUFBTSxRQUhOO01BSUEsVUFBQSxFQUFZLGtCQUpaO01BS0EsWUFBQSxFQUFjLElBTGQ7O0VBNUN1QixDQUQ3QjtBQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ2FlZGVzJ1xuICAuZGlyZWN0aXZlICdhY21lTWFsYXJrZXknLCAtPlxuXG4gICAgTWFsYXJrZXlDb250cm9sbGVyID0gKCRsb2csIGdpdGh1YkNvbnRyaWJ1dG9yKSAtPlxuICAgICAgJ25nSW5qZWN0J1xuICAgICAgdm0gPSB0aGlzXG5cbiAgICAgIGFjdGl2YXRlID0gLT5cbiAgICAgICAgZ2V0Q29udHJpYnV0b3JzKCkudGhlbiAtPlxuICAgICAgICAgICRsb2cuaW5mbyAnQWN0aXZhdGVkIENvbnRyaWJ1dG9ycyBWaWV3J1xuICAgICAgICAgIHJldHVyblxuXG4gICAgICBnZXRDb250cmlidXRvcnMgPSAtPlxuICAgICAgICBnaXRodWJDb250cmlidXRvci5nZXRDb250cmlidXRvcnMoMTApLnRoZW4gKGRhdGEpIC0+XG4gICAgICAgICAgdm0uY29udHJpYnV0b3JzID0gZGF0YVxuICAgICAgICAgIHZtLmNvbnRyaWJ1dG9yc1xuXG4gICAgICB2bS5jb250cmlidXRvcnMgPSBbXVxuICAgICAgYWN0aXZhdGUoKVxuICAgICAgcmV0dXJuXG5cbiAgICBsaW5rRnVuYyA9IChzY29wZSwgZWwsIGF0dHIsIHZtKSAtPlxuICAgICAgd2F0Y2hlciA9IHVuZGVmaW5lZFxuICAgICAgdHlwaXN0ID0gbWFsYXJrZXkoZWxbMF0sXG4gICAgICAgIHR5cGVTcGVlZDogNDBcbiAgICAgICAgZGVsZXRlU3BlZWQ6IDQwXG4gICAgICAgIHBhdXNlRGVsYXk6IDgwMFxuICAgICAgICBsb29wOiB0cnVlXG4gICAgICAgIHBvc3RmaXg6ICcgJylcbiAgICAgIGVsLmFkZENsYXNzICdhY21lLW1hbGFya2V5J1xuICAgICAgYW5ndWxhci5mb3JFYWNoIHNjb3BlLmV4dHJhVmFsdWVzLCAodmFsdWUpIC0+XG4gICAgICAgIHR5cGlzdC50eXBlKHZhbHVlKS5wYXVzZSgpLmRlbGV0ZSgpXG4gICAgICAgIHJldHVyblxuICAgICAgd2F0Y2hlciA9IHNjb3BlLiR3YXRjaCgndm0uY29udHJpYnV0b3JzJywgLT5cbiAgICAgICAgYW5ndWxhci5mb3JFYWNoIHZtLmNvbnRyaWJ1dG9ycywgKGNvbnRyaWJ1dG9yKSAtPlxuICAgICAgICAgIHR5cGlzdC50eXBlKGNvbnRyaWJ1dG9yLmxvZ2luKS5wYXVzZSgpLmRlbGV0ZSgpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIHJldHVyblxuICAgICAgKVxuICAgICAgc2NvcGUuJG9uICckZGVzdHJveScsIC0+XG4gICAgICAgIHdhdGNoZXIoKVxuICAgICAgICByZXR1cm5cbiAgICAgIHJldHVyblxuXG4gICAgZGlyZWN0aXZlID1cbiAgICAgIHJlc3RyaWN0OiAnRSdcbiAgICAgIHNjb3BlOiBleHRyYVZhbHVlczogJz0nXG4gICAgICB0ZW1wbGF0ZTogJyZuYnNwOydcbiAgICAgIGxpbms6IGxpbmtGdW5jXG4gICAgICBjb250cm9sbGVyOiBNYWxhcmtleUNvbnRyb2xsZXJcbiAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuIl19