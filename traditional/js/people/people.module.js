(function () {
    angular.module('app.people',['ui.router'])
    .config(function ($stateProvider) {

        $stateProvider.state('people',{
            url : '/people',
            controller: 'PersonController',
            templateUrl: 'js/people/controllers/person.html',
            controllerAs: 'vm'
        });
        
    });
})();