/**
 * `gulp watchify`
 *
 * Use watchify with Browserify to bundle our JS.
 * https://github.com/greypants/gulp-starter/blob/master/gulp/tasks/watchify.js
 */

var gulp = require('gulp');
var browserifyTask = require('./browserify');

gulp.task('watchify', function() {
    return browserifyTask( true ); // true = dev mode
});
