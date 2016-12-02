module.exports = function (ngModule) {
    ngModule
    .controller('PersonController', function (peopleService) {
        var vm = this;

        vm.message = 'this is the person controller';

        vm.people = peopleService.get();
        
    });
};