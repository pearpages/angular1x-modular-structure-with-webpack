module.exports = function (ngModule) {
    ngModule
    .value('Car', Car);

    function Car() {
        
        this.doors = 3;
        this.drivers = 1;
    }
};