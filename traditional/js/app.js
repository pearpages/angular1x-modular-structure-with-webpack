(function (){
    angular.module('app',['app.cars','app.people','ui.router'])
    .config(function ($stateProvider,$urlRouterProvider) {
        
        $urlRouterProvider.otherwise('/car');
        
    })
    .controller('MainController', function (Car) {
        var vm = this;

        vm.car = new Car();
    });
})();
