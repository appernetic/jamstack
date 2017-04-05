/**
 * `gulp eslint`
 *
 * Javascript linting.
 */

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var bs = require('browser-sync');
var taskConfig = require('../config/tasks').eslint;

var lintTask = function() {
    return gulp.src(taskConfig.src)
        .pipe(eslint())
        .pipe(eslint.format())
};

gulp.task('eslint', function() {
    return lintTask();
});

module.exports = lintTask;
