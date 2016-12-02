module.exports = function (ngModule) {
    ngModule
    .factory('carsService', function (Car) {
        return {
            get: function () {
                return [new Car(),new Car(), new Car()]
            }
        }
    });
};