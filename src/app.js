const PageSwitcher = require('./PageSwitcher.js');
// const Hamburger = require('./Hamburger.js');


document.addEventListener('DOMContentLoaded', () => {
    const onTo = () => {
        console.log('onto');
    };
    const onFrom = () => {
        console.log('onfrom');
    };

    const pages = new PageSwitcher(
        'home-page', 'home-link', 'fade', onTo, onFrom);
    pages.addPage('page-1', 'page1-link', 'left');
    pages.addPage('page-2', 'page2-link', 'right');

    // new Hamburger('nav');
});
