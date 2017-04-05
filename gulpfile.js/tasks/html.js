/**
 * `gulp html`
 *
 * Compile HTML from Handlebars templates.
 */

var gulp = require('gulp');
var hb = require('gulp-hb');
var fm = require('gulp-front-matter');
var bs = require('browser-sync');
var rename = require('gulp-rename');
var handleError = require('../lib/handleError');
var size = require('gulp-size');

var config = require('../config');
var taskConfig = require('../config/tasks').html;

gulp.task('html', function() {
    var hbStream = hb({
        bustCache: true,
        debug: false,
        cwd: process.cwd()
    })

    // Partials/Layouts
    .partials(taskConfig.partials)

    // Helpers
    .helpers(require('handlebars-helpers'))
    .helpers(require('handlebars-layouts'))

    // Template Data
    //
    // 1. Pass the current environment (dev, qa etc) to the templates.
    .data(taskConfig.data)
    .data({
        env: config.env // [1]
    })

    return gulp.src(taskConfig.pages)
        .pipe(fm({
            property: 'data.frontMatter',
            remove: true
        }))
        .pipe(hbStream)
        .on('error', handleError)
        .pipe(rename({
            extname: '.html'
        }))
        .pipe(gulp.dest(taskConfig.dest))
        .pipe(size({ title: 'compiled html size:' }))
        .pipe(bs.reload({ stream: true }));
});
