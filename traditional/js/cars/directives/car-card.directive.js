(function () {
    angular.module('app.cars')
    .directive('carCard', function () {
        return {
            restrict: 'E',
            templateUrl: '/js/cars/directives/car-card.html',
            scope: {
                car: '='
            }
        }
    });
})();