/**
 * `gulp browserify`
 *
 * Bundle and minify the JS.
 *
 * Heavily "inspired" by:
 * https://github.com/gulpjs/gulp/blob/master/docs/recipes/fast-browserify-builds-with-watchify.md
 */

var watchify = require('watchify');
var browserify = require('browserify');
var bs  = require('browser-sync');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var size = require('gulp-size');
var aliasify = require('aliasify');

// Config and Utils.
var taskConfig = require('../config/tasks').browserify;
var noop  = require('gulp-util').noop;
var utils = require('../lib/utils');
var linter = require('./eslint');

// Lodash Includes.
var _assign = require('lodash.assign');

// Define custom browserify config options here.
//
// 1. sourcemaps, I think?
var customOpts = {
    entries: [taskConfig.src + '/' + taskConfig.entry],
    debug: utils.isDev() // [1]
};

var bundleTask = function( devMode ) {
    var options;

    if(devMode) {
        options = _assign({}, watchify.args, customOpts);
    } else {
        options = _assign({}, customOpts);
    }

    var b = browserify( options )
                .transform('babelify')
                .transform('aliasify', {
                    aliases: {
                        'utils': './src/js/lib/utils.js'
                    }
                });

    var bundle = function() {
        linter();

        return b
            .bundle()
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .pipe(source(taskConfig.output))
            .pipe(buffer())
            .pipe(utils.isDev() ? sourcemaps.init({ loadMaps: true }) : noop())
            .pipe(utils.isDev() ? sourcemaps.write('./') : noop())
            .pipe(!utils.isDev() ? uglify() : noop())
            .pipe(gulp.dest(taskConfig.dest))
            .pipe(size({ title: 'compiled JS bundle size:', showFiles: true }))
            .pipe(bs.reload({ stream: true }));
    };

    if(devMode) {
        b = watchify(b);
        b.on('update', bundle);
        b.on('log', gutil.log);
    }

    return bundle();
};

gulp.task('browserify', function() {
    return bundleTask();
});

module.exports = bundleTask;
