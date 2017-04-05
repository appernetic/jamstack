(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/**
 * Just a demo component, that's all :)
 */
var utils = require('./../../lib/utils.js');

module.exports = function () {
    var selectors = {
        el: 'js-demo'
    };

    var component = void 0;

    var init = function init() {
        var el = document.getElementsByClassName(selectors.el);

        if (!el.length) {
            console.log('ok bye');
            return;
        }

        console.log(utils.isLocal());

        component = el[0];

        console.log(component, 'component found!');
        component.innerHTML = 'Hello, this is a JS demo :)';
    };

    return { init: init };
}();

},{"./../../lib/utils.js":3}],2:[function(require,module,exports){
'use strict';

module.exports = {
    demo: require('./demo')
};

},{"./demo":1}],3:[function(require,module,exports){
'use strict';

module.exports = function () {
    return {
        /**
         * Crude attempt at detecting local dev env.
         * @return {Boolean} [true|false]
         */
        isLocal: function isLocal() {
            return window.location.pathname.split('.').pop() === 'html';
        },


        /**
         * Shamelessly borrowed from: https://github.com/ded/bowser/blob/master/bowser.js
         */
        isIE: function isIE() {
            return (/msie|trident/i.test(navigator.userAgent)
            );
        }
    };
}();

},{}],4:[function(require,module,exports){
'use strict';

(function () {
    var components = require('./components');

    components.demo.init();
})();

},{"./components":2}]},{},[4])

//# sourceMappingURL=main.bundle.js.map
