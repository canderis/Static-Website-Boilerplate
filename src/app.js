"use strict";

import Switcher from "./PageSwitcher.js";
import Hamburger from "./Hamburger.js";
import Animate from "./Animate.js";

document.addEventListener("DOMContentLoaded", () => {
	new Switcher("/page-1");
	const hamburger = new Hamburger("nav", 940);
	new Animate();
});

document.getElementById("page-1").addEventListener("onTo", $event => {
	console.log("onTo Page 1", $event);
});

document.getElementById("page-1").addEventListener("onFrom", $event => {
	console.log("onFrom Page 1", $event);
});

document.getElementById("page-2").addEventListener("onTo", $event => {
	console.log("onTo Page 2", $event);
});

document.getElementById("page-2").addEventListener("onFrom", $event => {
	console.log("onFrom Page 2", $event);
});
