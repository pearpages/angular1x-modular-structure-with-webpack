(function (){
    angular.module('app.cars')
    .value('Car', Car);

    function Car() {
        
        this.doors = 3;
        this.drivers = 1;
    }

})();