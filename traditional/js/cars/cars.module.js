(function () {
    angular.module('app.cars', ['ui.router'])
        .config(function ($stateProvider) {
            $stateProvider.state('car', {
                controller: 'CarController',
                templateUrl: 'js/cars/controllers/car.html',
                url: '/car',
                controllerAs: 'vm'
            })
        });
})();