/*jshint node:true*/
module.exports = {
    description: 'Prototype for projects requiring visualization',
    normalizeEntityName: function () {
        // no-op since we're just adding dependencies
    },

    afterInstall: function () {
        return this.addAddonsToProject({
            packages: [
                {name: 'ember-d3'},
                {name: 'ember-highcharts'},
                {name: 'ember-spin-kit'},
                {name: 'ember-wormhole'},
                {name: 'liquid-fire'}
            ]
        });
    }
};
