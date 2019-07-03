// transition options: bottom, top, left, right, fade

class PageSwitcher {
	constructor(error = "/") {
		this.routes = new Map();
		this.activeState = null;
		this.error = error;

		this.buildStylesheet();

		document.querySelectorAll("[ps-page]").forEach(pageEl => {
			const id = pageEl.getAttribute("ps-page");
			this.routes.set(id, this.createPage(id));
		});

		window.onpopstate = () => {
			const page = this.routes.get(location.pathname);
			if (page) this.transition(page);
			else this.transition(this.routes.get(this.error));
		};

		const page = this.routes.get(location.pathname);
		if (page) {
			this.activeState = page;
			this.activeState.to();
		} else {
			this.activeState = this.routes.get(this.error);
			window.history.replaceState(
				{},
				this.error,
				window.location.origin + this.error
			);
			this.activeState.to();
		}

		console.log(this.routes);
	}

	loadPage(to) {
		window.history.pushState(
			{},
			this.route,
			window.location.origin + to.route
		);
		this.transition(to);
	}

	transition(to) {
		this.activeState.from();
		this.activeState = to;
		this.activeState.to();
	}

	createPage(pageId) {
		const pageEl = document.querySelector(`[ps-page="${pageId}"]`);
		const linkEls = document.querySelectorAll(`[ps-route="${pageId}"]`);

		const state = {
			route: pageId,
			from: () => {
				pageEl.classList.remove("-active");
				linkEls.forEach(link => link.classList.remove("-active"));
				// page.onFrom();
				pageEl.dispatchEvent(new Event("onFrom"));
			},
			to: () => {
				pageEl.classList.add("-active");
				linkEls.forEach(link => link.classList.add("-active"));
				// page.onTo();
				pageEl.dispatchEvent(new Event("onTo"));
			}
		};

		linkEls.forEach(link =>
			link.addEventListener("click", () => {
				this.loadPage(state);
			})
		);

		return state;
	}

	buildStylesheet() {
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
	}
}

export default PageSwitcher;
