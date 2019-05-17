module.exports = function(homePageId, homeLinkId) {
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

    app.transition = (to) => {
        app.activeState.from();
        app.activeState = to;
        app.activeState.to();
    };

    app.activeState = createPage(homePageId, homeLinkId);
    app.pages.push(app.activeState);
    app.activeState.to();

    return app;
};
