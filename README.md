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

Currently, the pages are animated using css in style.css for the
pages, but I plan to move that into the javascript, with more code
based configuration.

## Future plans:
Other than improvements to the micro-library, I want to transition
from ESLint and stylelint to prettier.
I also want to add in some other baseline css tweaks.
