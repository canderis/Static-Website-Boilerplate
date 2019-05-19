// transition options: bottom, top, left, right, fade
const buildStylesheet = function() {
    const element = document.createElement("style");
    document.head.appendChild(element);

    const stylesheet = element.sheet;
    stylesheet.insertRule(`
		.pageSwitcher.-pageSwitcherActive{
			transform: translateY(0) translateX(0);
			opacity: 1;
		}`);

    stylesheet.insertRule(`
		.pageSwitcher.-pageSwitcherleft {
			width: 100vw;
			height: 100vh;
			position: fixed;
			transition: 1s;
			top: 0;
			transform: translateX(-100vw);
		}`);

    stylesheet.insertRule(`
		.pageSwitcher.-pageSwitcherright {
			width: 100vw;
			height: 100vh;
			position: fixed;
			transition: 1s;
			top: 0;
			transform: translateX(100vw);
		}`);

    stylesheet.insertRule(`
		.pageSwitcher.-pageSwitchertop {
			width: 100vw;
			height: 100vh;
			position: fixed;
			transition: 1s;
			top: 0;
			transform: translateY(-100vh);
		}`);

    stylesheet.insertRule(`
		.pageSwitcher.-pageSwitcherbottom {
			width: 100vw;
			height: 100vh;
			position: fixed;
			transition: 1s;
			top: 0;
			transform: translateY(100vh);
		}`);

    stylesheet.insertRule(`
		.pageSwitcher.-pageSwitcherfade {
			width: 100vw;
			height: 100vh;
			position: fixed;
			transition: 1s;
			top: 0;
			opacity: 0;
		}`);
};

const createPage = function(page, app) {
    const pageEl = document.getElementById(page.pageId);
    const linkEl = document.getElementById(page.linkId);
    pageEl.classList.add("pageSwitcher");
    pageEl.classList.add(`-pageSwitcher${page.transition}`);

    const state = {
        from: () => {
            pageEl.classList.remove("-pageSwitcherActive");
            linkEl.classList.remove("-active");
            page.onFrom();
        },
        to: () => {
            pageEl.classList.add("-pageSwitcherActive");
            linkEl.classList.add("-active");
            page.onTo();
        }
    };

    linkEl.addEventListener("click", () => {
        app.transition(state);
    });

    return state;
};

const switcher = function(pages, routes) {
    const app = {
        pages: new Map(),
        routes: new Map(),
        activeState: null,
        transition: function(to) {
            app.activeState.from();
            app.activeState = to;
            app.activeState.to();
        }
    };

    buildStylesheet();

    pages.forEach(page => {
        app.pages.set(page.pageId, createPage(page, app));
    });

    routes.forEach(route => {
        const page = app.pages.get(route.pageId);
        app.routes.set(route.url, page);
        page.route = route.url;
    });

    //get url
    app.activeState = app.routes.get("/");
    app.activeState.to();

    return app;
};

const page = function(pageId, linkId, options = {}) {
    const defaultOptions = {
        pageId: pageId,
        linkId: linkId,
        transition: "fade",
        onTo: () => {},
        onFrom: () => {}
    };
    return Object.assign(defaultOptions, options);
};

const route = (url, pageId) => {
    return { url: url, pageId: pageId };
};

module.exports = {
    Switcher: switcher,
    Page: page,
    Route: route
};
