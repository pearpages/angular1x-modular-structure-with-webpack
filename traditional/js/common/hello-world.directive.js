(function (){
    angular.module('app')
    .directive('helloWorld', function () {
        return {
            restrict: 'E',
            template: 'hello world',
        }
    });
})();