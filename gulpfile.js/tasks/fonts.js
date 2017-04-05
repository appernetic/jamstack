/**
 * `gulp fonts`
 *
 * Copy and changed font assets found in `./src/fonts`.
 */

var gulp = require('gulp');
var cached = require('gulp-cached');
var taskConfig = require('../config/tasks').fonts;

gulp.task('fonts', function() {
    return gulp.src(taskConfig.src)
        .pipe(cached('fonts'))
        .pipe(gulp.dest(taskConfig.dest));
});
