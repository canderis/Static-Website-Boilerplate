("use strict");

import { Switcher } from "./PageSwitcher.js";

document.addEventListener(`DOMContentLoaded`, () => {
	const Hamburger = require("./Hamburger.js");

	new Switcher("/page-1");
	new Hamburger("nav", 940);
});
