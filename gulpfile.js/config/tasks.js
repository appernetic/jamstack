/**
 * Task level configuration values.
 */
var config = require('.');
var paths = config.paths;

module.exports = (function() {
 return {
    /**
     * Browserify.
     *
     * Javascript Bundler:
     * http://browserify.org
     */
     browserify: {
        src: paths.src + '/js',
        dest: paths.dist + '/js',
        entry: 'main.js',
        output: 'main.bundle.js'
    },

    /**
     * Browsersync.
     *
     * Local development server:
     * https://browsersync.io
     */
    browserSync: {
        baseDir: paths.dist
    },

    /**
     * CSS.
     */
    css: {
        watchSrc:  paths.src + '/scss/**/*.scss',
        src: [
            paths.src + '/scss/**/*.scss',
            '!' + paths.src + '/scss/**/_*.scss'
        ],
        dest: paths.dist + '/css'
    },

    /**
     * CSS Linting.
     *
     * http://stylelint.io/
     */
    csslint: {
        src: [
            paths.src + '/scss/**/*.scss',
            '!' + paths.src + '/scss/lib/**/*',
            '!' + paths.src + '/scss/plugins/**/*'
        ]
    },

    /**
     * Javascript Linting.
     *
     * http://eslint.org/
     */
    eslint: {
        src: [
            paths.src + '/js/**/*.js',
            '!' + paths.src + '/js/vendor/**',
            '!' + paths.src + '/js/lib/templates.js'
        ]
    },

    /**
     * Copy Font Assets.
     */
    fonts: {
        src: paths.src + '/fonts/**/*.{eot,svg,ttf,woff,woff2}',
        dest: paths.dist + '/fonts'
    },

    /**
     * HTML.
     *
     * gulp-hb:
     * https://github.com/shannonmoeller/gulp-hb
     */
    html: {
        path: paths.src + '/html',
        pages: paths.src + '/html/pages/**/*.{html,hbs}',
        partials: paths.src + '/html/templates/**/*.{html,hbs}',
        helpers: paths.src + '/html/helpers/**/*.js',
        data: paths.src + '/html/data/**/*.{js,json}',
        dest: paths.dist
    },

    /**
     * SVG Icon Sprite.
     */
    icons: {
        src: paths.src + '/svg/icons/**/*.svg',
        dest: paths.dist + '/svg',
        yml: './icons.yml'
    },

    /**
     * Compress Images.
     *
     * https://github.com/sindresorhus/gulp-imagemin
     */
    imagemin: {
        src: paths.src + '/img/**/*.{png,jpg,jpeg,gif,ico}',
        dest: paths.dist + '/img'
    },

    /**
     * Production Config.
     *
     * If the assets are required to be copied to another directory
     * once the build is complete (Usually restricted to CMS projects).
     */
    production: {
        src: [
            paths.dist + '/**/*',
            '!' + paths.dist + '/{html/docs,html/docs/**}',
            '!' + paths.dist + '/js/**/*.js.map',
            '!' + paths.dist + '/css/**/*.css.map'
        ],
        dest: './production'
    },

    /**
     * Static/Root Assets
     */
    static: {
        src: paths.src + '/static/**',
        dest: paths.dist
    }
 }
})();
