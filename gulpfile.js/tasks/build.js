/**
 * `gulp build`
 */

var gulp = require('gulp');
var gutil = require('gulp-util');
var utils = require('../lib/utils');
var config = require('../config');
var taskConfig = require('../config/tasks').production;

var buildTasks = [
    'css',
    'html',
    'browserify',
    'icons',
    'images',
    'fonts',
    'static'
];

var productionCopy = (config.env !== config.envs.dev) && taskConfig;

gulp.task('build', buildTasks, function() {
    if(productionCopy) {
        gulp.src(taskConfig.src).pipe(gulp.dest(taskConfig.dest));
    }

    gutil.log(gutil.colors.yellow(config.env + ' build complete.'));
});
