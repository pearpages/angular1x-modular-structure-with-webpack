(function (){
    angular.module('app.cars')
    .factory('carsService', function (Car) {
        return {
            get: function () {
                return [new Car(),new Car(), new Car()]
            }
        }
    });
})();