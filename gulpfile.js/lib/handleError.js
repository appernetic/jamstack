/**
 * helper function to handle errors with gulp-notify
 * (https://www.npmjs.com/package/gulp-notify)
 */
var notify = require('gulp-notify');
var utils = require('./utils');

module.exports = function() {
    notify.onError(function(error) {
        var errFile = utils.vaguePath(error.fileName);

        return {
            title:   'Compile Error',
            message: 'Error: <%= error.message %> in ' + errFile + ' at line <%= error.lineNumber %>.'
        };
    }).apply(this, arguments);

    if (typeof this.emit === 'function') { this.emit('end'); }
};
