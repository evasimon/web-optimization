## Website Performance Optimization
_Project @Udacity #frontendnanodegree_

### Step 1: Critical Rendering Path (CRP) Optimization
> **Scope:** Optimize PageSpeed Insights score of at least 90 for Mobile and Desktop for `index.html`.


### Step 2: Frame Rate Optimization
> **Scope:** Optimize `views/js/main.js` to make `views/pizza.html` render with a consistent frame-rate at 60fps when scrolling.


### Step 3: Computational Efficiency
> **Scope:** Using the pizza size slider on the `views/pizza.html` page, resize pizzas in less than 5ms.

After tracing and idetifying the performance issue in DevTools/Timeline, I found that a forced synchronous layout (FSL) was causing the high resize time of the pizzas.

**Changes made on the `main.js` file:**

- Fixed FSL by refactoring `changePizzaSizes` _function_ (see line 445-467), reducing repetition of code and by switching `offsetWidth` calculation from `px` to `%`.
- Time to resize pizzas now is less then 1ms.

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
