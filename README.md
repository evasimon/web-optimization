## Website Performance Optimization
_Project @Udacity #frontendnanodegree_

### Step 1: Critical Rendering Path (CRP) Optimization
> **Scope:** Optimize PageSpeed Insights score of at least 90 for Mobile and Desktop for `index.html`.

Defined the Critical Rendering Path (CRP) Metrics and optimized them by:
- reducing the number of critical resources
   - removed render-blocking `analytics.js` JavaScript by adding async attribute to its `script` tag.
   - removed render-blocking `google fonts` + `style.css` CSS by moving them to the bottom of the HTML.
- reducing the number of critical bytes of critical resources
   - used Grunt build tool to perform optimization such as minification of CSS and JS and image optimization _(see **Step 4** for details)_.
- hence, shortening the critical path length

[`Index.html`](http://evasimon.me/web-optimization/) now measures a score above 90 on [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) for both Mobile and Desktop devices.

<br>


### Step 2: Frame Rate Optimization
> **Scope:** Optimize `views/js/main.js` to make `views/pizza.html` render with a consistent frame-rate at 60fps when scrolling.

**Changes made on `views/js/main.js` and `views/css/style.css` files:**

- Decreased the number of pizzas from 200 to 20 at page loading/scrolling (see line 545).
- Used `getElementsByClassName()` _function_ instead of `querySelectorAll()` _function_ (see line 516); a faster way to access the DOM.
- Fixed the forced synchronous layout (FSL) by removing `document.body.scrollTop / 1250` function from the loop (see line 519) as its value does not depend on the number of elements that have the `mover` class.
- Added `backface-visibility: hidden` style on the `mover` class, so the backside of the rotated elements are not going to be Painted when scrolling the page.

<br>

### Step 3: Computational Efficiency
> **Scope:** Using the pizza size slider on the `views/pizza.html` page, resize pizzas in less than 5ms.

After tracing and idetifying the performance issue in DevTools/Timeline, I found that an FSL was causing the high resize time of the pizzas.

**Changes made on `views/js/main.js` file:**

- Fixed FSL by refactoring `changePizzaSizes` _function_ (see line 445-467), reducing repetition of code and by switching `offsetWidth` calculation from `px` to `%`.
- Time to resize pizzas now is less then 1ms.

<br>

### Step 4: Minification of CSS and JS, and Image Optimization
> **Scope:** Download, configure and implement task runner on the project using Grunt.

**How to run Grunt on this project?**

- Download the project assets and make sure `src` folder, `Gruntfile.js` and `package.json` files are under one folder.
- Open your terminal window.
- Ensure that you have the _npm_ package manager or _Node.js_ installed and up-to-date by running `npm update -g npm`.
- Install Grunt's command line interface (CLI) by running `npm install -g grunt-cli`.
- Since, `Gruntfile.js` and `package.json` are already configured for the project with the needed tasks and Grunt plugins --> you are ready to run Grunt:
    * Go to the project's root directory in your terminal.
    * Install project dependencies by running `npm install`.
    * Run Grunt with `grunt`.
