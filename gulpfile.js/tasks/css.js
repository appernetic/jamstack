/**
 * `gulp sass`
 *
 * Compile, prefix and minify stylesheets.
 */

// Import Dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var bs = require('browser-sync');
var size = require('gulp-size');

// Import Utils & Configs
var config = require('../config');
var taskConfig = require('../config/tasks').css;
var noop  = require('gulp-util').noop;
var utils = require('../lib/utils');

// Task Declaration
gulp.task('css', ['csslint'], function() {
    var processors = [
        autoprefixer({browsers: ['last 2 versions', '> 1%', 'ie >= 10']})
    ];

    if(!utils.isDev()) {
        processors.push(cssnano());
    }

    return gulp.src(taskConfig.src)
        .pipe(utils.isDev() ? sourcemaps.init() : noop())
        .pipe(sass({
            includePaths: [
                './node_modules/normalize.css'
            ]
        }).on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(size({ title: 'compiled css size:' }))
        .pipe(utils.isDev() ? sourcemaps.write('./') : noop())
        .pipe(gulp.dest(taskConfig.dest))
        .pipe(bs.reload({ stream: true }));
});


