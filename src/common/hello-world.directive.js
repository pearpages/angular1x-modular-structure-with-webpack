module.exports = function (ngModule) {
    ngModule
    .directive('helloWorld', function () {
        return {
            restrict: 'E',
            template: 'hello world',
        }
    });
};