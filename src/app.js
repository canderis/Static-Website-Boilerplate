const PageSwitcher = require('./PageSwitcher.js');

document.addEventListener('DOMContentLoaded', () => {
    const pages = new PageSwitcher('home-page', 'home-link');
    pages.addPage('page-1', 'page1-link');
    pages.addPage('page-2', 'page2-link');
});
