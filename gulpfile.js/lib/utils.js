/**
 * A collection of useful utility functions
 * for the gulp tasks.
 */
var config = require('../config');

module.exports = (function() {
    return {
        vaguePath: function( path ) {
            if(!path) { return; }
            return '.../' + path.split('/').slice(-3).join('/');
        },

        isDev: function() {
            return config.env !== config.envs.prod;
        }
    }
})();
