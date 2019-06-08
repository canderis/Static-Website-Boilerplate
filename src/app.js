("use strict");

import { Switcher } from "./PageSwitcher.js";

document.addEventListener("DOMContentLoaded", () => {
	const Hamburger = require("./Hamburger.js");

	new Switcher("/page-1");
	new Hamburger("nav", 940);
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
