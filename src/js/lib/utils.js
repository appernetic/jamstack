module.exports = (() => {
    return {
        /**
         * Crude attempt at detecting local dev env.
         * @return {Boolean} [true|false]
         */
        isLocal() {
            return window.location.pathname.split('.').pop() === 'html';
        },

        /**
         * Shamelessly borrowed from: https://github.com/ded/bowser/blob/master/bowser.js
         */
        isIE() {
            return /msie|trident/i.test(navigator.userAgent);
        }
    };
})();
