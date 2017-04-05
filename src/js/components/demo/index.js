/**
 * Just a demo component, that's all :)
 */
const utils = require('utils');

module.exports = (() => {
    const selectors = {
        el: 'js-demo'
    };

    let component;

    const init = () => {
        const el = document.getElementsByClassName(selectors.el);

        if(!el.length) {
            console.log('ok bye');
            return;
        }

        console.log(utils.isLocal());

        component = el[0];

        console.log(component, 'component found!');
        component.innerHTML = 'Hello, this is a JS demo :)';
    };

    return {init};
})();
