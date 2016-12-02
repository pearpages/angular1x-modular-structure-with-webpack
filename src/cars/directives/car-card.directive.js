module.exports = function (ngModule) {
    ngModule
    .directive('carCard', function () {
        return {
            restrict: 'E',
            template: require('./car-card.html'),
            scope: {
                car: '='
            }
        }
    });
};