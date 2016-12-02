
    var angular = require('angular');
    var uirouter = require('angular-ui-router');

    var people = angular.module('app.people', [uirouter]);

    require('./controllers/person.controller')(people);
    require('./directives/kcd/kcd-hello')(people);
    require('./models/person')(people);
    require('./services/people.service')(people);

    people.config(function ($stateProvider) {

        $stateProvider.state('people', {
            url: '/people',
            controller: 'PersonController',
            template: require('./controllers/person.html'),
            controllerAs: 'vm'
        });

    });
