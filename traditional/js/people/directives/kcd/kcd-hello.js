(function () {
    angular.module('app.people')
        .directive('kcdHello', function () {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: 'js/people/directives/kcd/kcd-hello.html',
                controllerAs: 'vm',
                controller: controller
            }

            function controller() {
                var vm = this;

                vm.greeting = 'Hello World';
            }
        });
})();
