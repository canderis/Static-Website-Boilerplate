import { Switcher } from "./PageSwitcher.js";

document.addEventListener(`DOMContentLoaded`, () => {
    const Hamburger = require("./Hamburger.js");

    const onTo = () => {
        console.log("onto");
    };
    const onFrom = () => {
        console.log("onfrom");
    };

    new Switcher();
    new Hamburger("nav", 940);
});
