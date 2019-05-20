// transition options: bottom, top, left, right, fade
const buildStylesheet = function() {
    const element = document.createElement("style");
    document.head.appendChild(element);

    const stylesheet = element.sheet;
    stylesheet.insertRule(`
		[ps-page].-active{
			transform: translateY(0) translateX(0);
			opacity: 1;
        }`);

    stylesheet.insertRule(`
		[ps-page]{
			top: 0;
			width: 100vw;
			height: 100vh;
			position: fixed;
			transition: 1s;
		}`);

    stylesheet.insertRule(`
        [ps-page][ps-transition="left"] {
			transform: translateX(-100vw);
		}`);

    stylesheet.insertRule(`
        [ps-page][ps-transition="right"] {
			transform: translateX(100vw);
		}`);

    stylesheet.insertRule(`
        [ps-page][ps-transition="top"] {
			transform: translateY(-100vh);
		}`);

    stylesheet.insertRule(`
        [ps-page][ps-transition="bottom"]{
			transform: translateY(100vh);
		}`);

    stylesheet.insertRule(`
        [ps-page]:not(.-active) {
			opacity: 0;
		}`);
};

const createPage = function(pageId, app) {
    const pageEl = document.querySelector(`[ps-page="${pageId}"]`);
    const linkEls = document.querySelectorAll(`[ps-route="${pageId}"]`);

    const state = {
        route: pageId,
        from: () => {
            pageEl.classList.remove("-active");
            linkEls.forEach(link => link.classList.remove("-active"));
            // page.onFrom();
        },
        to: () => {
            pageEl.classList.add("-active");
            linkEls.forEach(link => link.classList.add("-active"));
            // page.onTo();
        }
    };

    linkEls.forEach(link =>
        link.addEventListener("click", () => {
            app.loadPage(state);
        })
    );

    return state;
};

const switcher = function(error = "/") {
    const app = {
        routes: new Map(),
        activeState: null,
        transition: function(to) {
            app.activeState.from();
            app.activeState = to;
            app.activeState.to();
        },
        loadPage: function(to) {
            window.history.pushState(
                {},
                to.route,
                window.location.origin + to.route
            );
            this.transition(to);
        },
        error: error
    };

    buildStylesheet();

    document.querySelectorAll("[ps-page]").forEach(pageEl => {
        const id = pageEl.getAttribute("ps-page");
        app.routes.set(id, createPage(id, app));
    });

    window.onpopstate = () => {
        const page = app.routes.get(location.pathname);
        if (page) app.transition(page);
        else app.transition(app.routes.get(app.error));
    };

    const page = app.routes.get(location.pathname);
    if (page) {
        app.activeState = page;
        app.activeState.to();
    } else {
        app.activeState = app.routes.get(app.error);
        window.history.replaceState(
            {},
            app.error,
            window.location.origin + app.error
        );
        app.activeState.to();
    }

    console.log(app);
    return app;
};

module.exports = {
    Switcher: switcher
};
