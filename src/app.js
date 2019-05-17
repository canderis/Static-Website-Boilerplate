const pageSwitcher = (function() {
    const app = {
        pages: [],
        activeState: null,
    };

    const createPage = (pageId, linkId) => {
        const page = document.getElementById(pageId);
        const link = document.getElementById(linkId);

        const state = {
            from: () => {
                page.classList.remove('-active');
                link.classList.remove('-active');
            },
            to: () => {
                page.classList.add('-active');
                link.classList.add('-active');
            },
        };

        link.addEventListener('click', () => {
            app.transition(state);
        });

        return state;
    };

    app.addPage = (pageId, linkId) => {
        app.pages.push(createPage(pageId, linkId));
    };

    app.init = (homePageId, homeLinkId) => {
        app.activeState = createPage(homePageId, homeLinkId);
        app.pages.push(app.activeState);
        app.activeState.to();
    };

    app.transition = (to) => {
        app.activeState.from();
        app.activeState = to;
        app.activeState.to();
    };

    return app;
})();

document.addEventListener('DOMContentLoaded', () => {
    pageSwitcher.init('home-page', 'home-link');
    pageSwitcher.addPage('page-1', 'page1-link');
    pageSwitcher.addPage('page-2', 'page2-link');
});
