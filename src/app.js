(function (){
    var angular = require('angular');
    var uirouter = require('angular-ui-router');
    require('./cars/cars.module');
    require('./people/people.module');

    var app = angular.module('app',['app.cars','app.people',uirouter]);

    app.config(function ($stateProvider,$urlRouterProvider) {
        
        $urlRouterProvider.otherwise('/car');
        
    })
    .controller('MainController', function (Car) {
        var vm = this;

        vm.car = new Car();
    });

    require('./common/hello-world.directive')(app);
})();
