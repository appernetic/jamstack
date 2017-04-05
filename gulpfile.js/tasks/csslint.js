/**
 * `gulp csslint`
 *
 * Compile, prefix and minify stylesheets.
 */

var gulp = require('gulp');
var cached = require('gulp-cached');
var stylelint = require('gulp-stylelint');

var taskConfig = require('../config/tasks').csslint;

gulp.task('csslint', function() {
    return gulp.src(taskConfig.src)
        .pipe(cached('csslint'))
        .pipe(stylelint({
            reporters: [
                { formatter: 'string', console: true }
            ],
            syntax: 'scss'
        }));
});
