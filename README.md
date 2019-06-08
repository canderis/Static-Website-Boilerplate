# Website Boilerplate

Custom, basic website boilerplate so I don't have to keep starting from scratch every time I work on a new project

## Features

* ESLint, stylelint, and prettier
* Webpack/babel
* Micro-library for page Switching
* Micro-library for a hamburger nav menu
* basic css & html page setup
* build and dev commands

## Commands

### Dev

Launches a dev server, with live change detection.

```bash
npm run dev
```

### Build

Builds a distribution ready package into /dist

```bash
npm run build
```

## Page Switching Library

I might pull this into it's own repo as it changes.
The code functions by assigning a state to and from function to
each page defined. It keeps track of the currently active page
and when a link is clicked to a new page, it calls the appropriate
transition functions, the from and to of the active and new page
respectively and builds the proper browser history.

### Page Switching Usage

```js
import { Switcher } from "./PageSwitcher.js";
new Switcher(errorRoute);
```

The switcher object takes a route to be loaded in the event of an invalid url. Defaults to "/".

```html
<!--Page Configuration-->
<div ps-page="/page-1" ps-transition="left"></div>
<!--Link Configuration-->
<a ps-route="/page-1">Page 1</a>
```

The home route is "/", and an unlimited number of links
can be assigned to any given route.

Transition event hooks can be added using the `onTo` and `onFrom` event listeners.

```js
document.getElementById("page-1").addEventListener("onTo", $event => {
    console.log("onTo Page 1", $event);
});
document.getElementById("page-1").addEventListener("onFrom", $event => {
    console.log("onFrom Page 1", $event);
});
```

## Hamburger Library

This might also be pulled into it's own repo.
The hamburger library adds a simple hamburger button to a nav menu passed to it by id.
This will hide and show the nav menu inside it, given that it is a ul.
An optional second parameter can be passed to define the threshold width for the menu to
appear, if omitted, the menu will always be visible.

### Hamburger Usage

```js
const Hamburger = require('./Hamburger.js');
new Hamburger('nav', 940);
```

## Future plans

* Add in some other baseline css tweaks.
* Add more basic responsiveness, particularly to the nav menu.
* Configure the htaccess file to be added to the dist folder on build & set up correctly
* Think my prettierrc/stylelintrc/rc files need more tweaks
* Shouldn't i have a babelrc?
* Lazy loading
* Look into what else babel/webpack/prettier can do
* Check out the prod build status
