# Website Boilerplate

Custom, basic website boilerplate so I don't have to keep starting from scratch every time I work on a new project

## Features:
* ESLint
* Webpack/babel
* stylelint
* micro-page switching library
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
respectively.

### Usage:
```
const PageSwitcher = require('./PageSwitcher.js');
const pages = new PageSwitcher('home-page', 'home-link', 'fade', onTo, onFrom);
```

The constructor takes 5 parameters: the id of the home page element; the id of the link to
the home page; the style of animation to use: left, right, top, bottom or the default, fade;
and then optionally it takes a function to call when the page is loaded,
and another when it is unloaded.

Then, more pages can be registered with the switcher like so:
```
pages.addPage('page-1', 'page1-link', 'left', onTo, onFrom);
```

The addPage function takes the same parameters as the constructor and can be called for as many
pages are needed.

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
* url support for each page
