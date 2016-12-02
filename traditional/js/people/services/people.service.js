(function () {
    angular.module('app.people')
    .factory('peopleService', function (Person) {
        return {
            get: function () {
                return [new Person(),new Person(), new Person()]
            }
        }
    });
})();