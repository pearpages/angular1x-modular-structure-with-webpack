(function (){
    angular.module('app.people')
    .value('Person', Person);

    function Person() {
        
        this.firstName = 'Pere';
        this.lastName = 'Pages Soms';
    }

})();