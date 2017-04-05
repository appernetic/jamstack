/**
 * `gulp serve`
 *
 * Runs a local static web server (http://www.browsersync.io).
 */

var gulp = require('gulp');
var bs = require('browser-sync');
var taskConfig = require('../config/tasks').browserSync;

gulp.task('serve', function() {
    return bs({
        server: {
            baseDir: taskConfig.baseDir,
            directory: true
        },
        ghostMode: false,
        notify: true
    });
});
