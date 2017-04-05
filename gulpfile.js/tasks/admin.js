/**
 * `gulp admin`
 *
 * Copy admin
 */

var gulp = require('gulp');
var cached = require('gulp-cached');

gulp.task('admin', function() {
    return gulp.src('./src/admin/**/*')
        .pipe(cached('admin'))
        .pipe(gulp.dest('./dist/admin'));
});
