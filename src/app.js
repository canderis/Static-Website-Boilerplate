import { Switcher, Page, Route } from "./PageSwitcher.js";

document.addEventListener(`DOMContentLoaded`, () => {
    // const PageSwitcher = require("./PageSwitcher.js");
    const Hamburger = require("./Hamburger.js");

    const onTo = () => {
        console.log("onto");
    };
    const onFrom = () => {
        console.log("onfrom");
    };

    const pages = [
        new Page("home-page", "home-link", { onTo: onTo, onFrom: onFrom }),
        new Page("page-1", "page1-link", { transition: "left" }),
        new Page("page-2", "page2-link", { transition: "right" })
    ];

    const routes = [
        new Route("/", "home-page"),
        new Route("/page-1", "page-1"),
        new Route("/page-2", "page-2")
    ];

    new Switcher(pages, routes);

    new Hamburger("nav", 940);
});
