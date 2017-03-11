/*jshint node:true*/
module.exports = {
    description: 'Prototype for default projects',
    normalizeEntityName: function () {
        // no-op since we're just adding dependencies
    },

    // NOTE: unfortunately, ember-cli-shims is gets installed to bower.json via the ember-composable-helpers addon.
    // There is no public API method to remove bower packages (I smell a PR, even though bower is being deprecated..)
    // So, remember to edit bower.json after running this blueprint, and remove ember-cli-shims
    afterInstall: function () {
        return this.addAddonsToProject({
            packages: [
                {name: 'ember-cli-bourbon'},
                {name: 'ember-cli-sass'},
                {name: 'ember-composable-helpers'},
                {name: 'ember-concurrency'},
                {name: 'ember-math-helpers'},
                {name: 'ember-moment'},
                {name: 'ember-truth-helpers'}
            ]
        }).then(() => this.removePackagesFromProject({
            packages: [
                {name: 'ember-welcome-page'}
            ]
        }));
    }
};
