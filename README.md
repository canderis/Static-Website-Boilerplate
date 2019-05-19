# Website Boilerplate

Custom, basic website boilerplate so I don't have to keep starting from scratch every time I work on a new project

## Features:
* ESLint
* Webpack/babel
* stylelint
* Micro-library for page Switching
* Micro-library for a hamburger nav menu
* basic css & html page setup
* build and dev commands


## Commands:

### Dev:

Launches a dev server, with live change detection.
```
npm run dev
```

### Build:
Builds a distribution ready package into /dist
```
npm run build
```

## Page Switching Library:

I might pull this into it's own repo as it changes.
The code functions by assigning a state to and from function to
each page defined. It keeps track of the currently active page
and when a link is clicked to a new page, it calls the appropriate
transition functions, the from and to of the active and new page
respectively and builds the proper browser history.

### Usage:
```
import { Switcher, Page, Route } from "./PageSwitcher.js";

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
```
The Switcher takes 2 parameters: an array of Pages, and an array of Routes.

The Page object takes 3 parameters, the pageId, the linkId, and an optional configuration object.
The configuration currently supports 3 properties:
* transition, a string to define which animation style to use. Valid options are fade, left, right, top and bottom.
* onTo, a hook to call when that page is loaded.
* onFrom, a hook to call when the page is unloaded.

The Route object takes 2 strings: the url, and the page associated with that url.

## Hamburger Library:
This might also be pulled into it's own repo.
The hamburger library adds a simple hamburger button to a nav menu passed to it by id.
This will hide and show the nav menu inside it, given that it is a ul.
An optional second parameter can be passed to define the threshold width for the menu to
appear, if omitted, the menu will always be visible.

### Usage:
```
const Hamburger = require('./Hamburger.js');
new Hamburger('nav', 940);
```

## Future plans:
* Add in some other baseline css tweaks.
* Add more basic responsiveness, particularly to the nav menu.
* Add in basic error page templates
* Add in favicon support
* Configure the htaccess file to be added to the dist folder on build
* Set up image and other resource support
