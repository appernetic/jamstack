/**
 * Use Yargs (https://github.com/yargs/yargs) to parse command line
 * optstrings to allow us to pass configuration values to the tasks.
 */
var args = require('yargs').argv;

module.exports = (function() {
    /**
     * Define the project environments.
     * @type {Object}
     */
    var envs = {
        dev: 'dev',
        qa: 'qa',
        preview: 'preview',
        prod: 'prod'
    };

    /**
     * Define project asset dirs/paths.
     * @type {Object}
     */
    var paths = {
        src:  './src',
        dist: './dist'
    };

    return {
        envs: envs,
        paths: paths,

        /**
         * Return the current build environment.
         * @type {string}
         */
        env: envs[args.env] || envs.dev
    }
})();
