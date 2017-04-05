/**
 * `gulp watch`
 * Starts local dev server and watches files and folders for changes.
 */

var gulp = require('gulp');
var taskConfig = require('../config/tasks');

gulp.task('watch', ['build', 'watchify', 'serve'], function() {
    // .scss
    gulp.watch(taskConfig.css.watchSrc, ['css']);

    // .html
    gulp.watch(taskConfig.html.path + '/**/*.{html,hbs}', ['html']);
});
