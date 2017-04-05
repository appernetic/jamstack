/**
 * `gulp icons`
 *
 * Create an SVG spritesheet for iconography.
 */

var gulp = require('gulp');
var sprite = require('gulp-svg-sprite');

var error = require('../lib/handleError');
var taskConfig = require('../config/tasks').icons;

gulp.task('icons', function() {
    gulp.src(taskConfig.src)
        .pipe(sprite({
            mode: {
                symbol: {
                    render: {
                        css: false,
                        scss: false
                    },
                    dest: '',
                    sprite: 'icons.svg'
                    // example: {
                    //     dest: '../docs/icons.html'
                    // }
                }
            },
            shape: {
                id: {
                    generator: 'icon-%s'
                },
                meta: taskConfig.yml
            },
            svg: {
                xmlDeclaration: false,
                doctypeDeclaration: false
            }
        }))
        .on('error', error)
        .pipe(gulp.dest(taskConfig.dest))
});
