
    var angular = require('angular');
    var uirouter = require('angular-ui-router');

    var cars = angular.module('app.cars', [uirouter]);

    require('./controllers/car.controller')(cars);
    require('./directives/car-card.directive')(cars);
    require('./models/car')(cars);
    require('./services/cars.service')(cars);

    cars.config(function ($stateProvider) {
        $stateProvider.state('car', {
            controller: 'CarController',
            template: require('./controllers/car.html'),
            url: '/car',
            controllerAs: 'vm'
        })
    });