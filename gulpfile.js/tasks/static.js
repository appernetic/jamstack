/**
 * `gulp static`
 *
 * Copy assets in ./src/static to the root of .dist/
 */

var gulp = require('gulp');
var cached = require('gulp-cached');
var taskConfig = require('../config/tasks').static;

gulp.task('static', function() {
    return gulp.src(taskConfig.src)
        .pipe(cached('static'))
        .pipe(gulp.dest(taskConfig.dest));
});
