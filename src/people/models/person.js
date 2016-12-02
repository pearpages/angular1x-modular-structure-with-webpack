module.exports = function (ngModule) {
    ngModule
    .value('Person', Person);

    function Person() {
        
        this.firstName = 'Pere';
        this.lastName = 'Pages Soms';
    }

};