module.exports = function (ngModule) {
    ngModule
        .directive('kcdHello', function () {
            return {
                restrict: 'E',
                scope: {},
                template: require('./kcd-hello.html'),
                controllerAs: 'vm',
                controller: controller
            }

            function controller() {
                var vm = this;

                vm.greeting = 'Hello World';
            }
        });
};
