module.exports = function (ngModule) {
    ngModule
    .factory('peopleService', function (Person) {
        return {
            get: function () {
                return [new Person(),new Person(), new Person()]
            }
        }
    });
};