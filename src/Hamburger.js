"use strict";

class Hamburger {
	constructor(navId, widthThreshold) {
		this.widthThreshold = widthThreshold;

		this.navId = navId;

		this.element = document.createElement("style");
		document.head.appendChild(this.element);

		this.hamburger = document.createElement("div");
		this.nav = document.getElementById(this.navId);

		this.nav.append(this.hamburger);
		this.hamburger.setAttribute("id", "hamburger");
		this.hamburger.append(document.createElement("span"));
		this.hamburger.append(document.createElement("span"));
		this.hamburger.append(document.createElement("span"));

		this.css = [
			`#hamburger{
				opacity: 1;
				transform: rotate(0);
			}`,
			`#${this.navId}.-show #hamburger{
				transform: rotate(90deg);
			}`,
			`#${this.navId}:not(.-show) ul {
				opacity: 0;
			}`,
			`#${this.navId} ul {
				opacity: 1;
				transition: 1s;
			}`
		];

		if (this.widthThreshold) {
			this.css = [
				`@media only screen and (max-width: ${this.widthThreshold}px) {
					${this.css.join("")}
				}`
			];
		}

		this.stylesheet = this.element.sheet;
		this.css.forEach(val => {
			this.stylesheet.insertRule(val);
		});

		this.stylesheet.insertRule(`
			#hamburger {
				display: grid;
				transition: 1s;
				position: fixed;
				cursor: pointer;
				opacity: 0;
				top: 20px;
				left: 20px;
				width: 30px;
				grid-gap: 6px;
				z-index: 9001;
			}`);
		this.stylesheet.insertRule(`
			#hamburger span {
				display: block;
				width: 30px;
				height: 4px;
				background-color: #fffc;
				margin: auto;
				border-radius: 3px;
			}`);
		this.stylesheet.insertRule(`
			#hamburger.-hide {
				opacity: 0;
			}`);

		this.navVisible = false;
		this.hamburger.addEventListener("click", () => {
			this.toggleNav();
		});
	}

	toggleNav() {
		if (!this.navVisible) {
			this.nav.classList.add("-show");
		} else {
			this.nav.classList.remove("-show");
		}
		this.navVisible = !this.navVisible;
	}

	disableHamburger() {
		this.navVisible = true;
		this.nav.classList.add("-show");
		this.hamburger.classList.add("-hide");
	}

	enableHamburger() {
		this.navVisible = false;
		this.nav.classList.remove("-show");
		this.hamburger.classList.remove("-hide");
	}
}

export default Hamburger;
