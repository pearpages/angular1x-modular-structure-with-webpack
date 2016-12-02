(function () {
    angular.module('app.cars')
    .controller('CarController', function (carsService) {
        var vm = this;

        vm.message = 'this is the car controller';
        vm.cars = carsService.get();

    });
})();