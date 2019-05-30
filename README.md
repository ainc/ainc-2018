## Welcome to the Awesome Inc Site

## Documentation

### TOC

 - [Stack](#stack)
 - [Quick Start](#quick-start)
 - [How to Edit](#how-to-edit)
 - [Code Style Guide](#code-style-guide)
 - [Styling / Sass](#styling--sass)
 - [Github Process](#github-process)
 - [File Structure](#file-structure)
 - [Underscores vs Hyphens](#underscores-vs-hyphens)
 - [Editing Javascript](#editing-javascript)
 - [Frameworks & Libraries](#frameworks-and-libraries)
 - [Links / Routes](#links--routes)
 - [Linter](#linter)
 - [Where to report bugs](#where-to-report-bugs)
 - [Useful Resources]("#useful-resources")


### Stack

The website is built with the [SSG Jekyll](https://jekyllrb.com/).

### Quick Start

1. Install Jekyll
2. Clone this repository
3. Serve the site locally with `bundle exec jekyll serve`

### How to Edit

Only invent new things if you can't use what is already there

Below is the order of how you should edit things:
1. Use a component from the theme
2. Use current css classes from theme
3. Assemble a new component from bootstrap classes
4. Create new classes, but still use bootstrap components as base

### Code Style Guide

We follow Google's HTML/CSS Style Guide found here: https://google.github.io/styleguide/htmlcssguide.html

Below are highlighted guidelines:

1. Protocol - Always use HTTPS for media files, stylesheets, and scripts, unless the files are not available over HTTPS
2. Comments - Explain code as needed. Answer these questions
  - What does it cover?
  - What purpose does it serve?
  - Why is respective solution used or preferred?
(This item is optional as it is not deemed a realistic expectation to always demand fully documented code. Mileage may vary heavily for HTML and CSS code and depends on the project’s complexity.)
3. Action Items - Mark todos and action items with TODO. Bonus: Create a Trello Card as well
4. HTML Validity - Use tools such as the [W3C HTML validator](https://validator.w3.org/nu/) to test


### Styling / Sass

Any style changes should be made with [Sass](https://sass-lang.com/).  There is no need to edit any libraries such as Bootstrap because they will be updated as we update the framework.

#### Index of SASS Files/Folders
 - /base/_root.scss - Global style changes 
 - /base/_typography.scss - Global font styles 
 - /components/ - Components that are used in different pages
 - /helpers/ - Animations, mixins, responsive styling
 - /layout/ - Specific style changes for page layouts
 - /pages/ - Styles for page-specific properties. 
 - /themes/ - This came with the template, no need to use this
 - /vendor/ - Libraries like bootstrap
 - /assets/css/main.scss - Importer for all scss files


### Github Process

Our Github process follows both the 1. [Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow) and the 2. [Git Centralized Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows#centralized-workflow).

*Please read the two links above before committing anything (it's a 10 minute read)*

General Steps:
1. Pull from master branch
2. Create a new branch
3. Update, add, commit and push changes
4. Push feature branch to remote (master)
5. Allow for feedback from teammates
6. Merge your pull request

#### FAQ

 - **How do I know to follow Feature Branch Workflow or Git Centralized Workflow?**
    Timing & **Feature**. Timing: If the task can be completed within sitting down, not leaving the computer, and publishing the changes, then use Git Centralized Workflow. If it will take longer, use a branch. **Feature**: If it is a feature you are adding to the site, then it probably can't be completed as quickly as discussed above and deserves its own branch for people to review the code.

### File Structure

We follow a simple Jekyll file structure with layouts, includes, data, etc. All CSS, Javascript and font files are in the /assets folder. Images can be found in the /images folder.

### Underscores vs Hyphens

SEO is important and it cares about how you name your images. Currently, Google wants us to name our images with hyphens.
source: https://shuttermuse.com/image-seo-how-to-name-files/


### Editing Javascript

TBD

Currently working out of custom.js to add additional scripts.

### Frameworks and Libraries

#### Animate on Scroll (AOS)
Library to animate elements based on scrolling. It is very lightweight and more documentation can be found here:
https://github.com/michalsnik/aos

#### Bootstrap 3
HTML/CSS/JS Framework for responsive projects - [Docs](https://getbootstrap.com/docs/3.3/)

### Links / Routes

Routes file - _data/routes.yml

How it works:
linkname: "/path-to-page/"

The point of this is to create a central place to hold links so that if we were to change a path to a page, we don't have to change it in all of the places it is used. This works just like any other data file. 

Documentation: https://www.sitepoint.com/hacking-routing-component-jekyll/

### Useful Resources

Developer Hints for Jekyll
https://devhints.io/jekyll

### Where to Report Bugs

Trello is the best place to report bugs. Create a card with an appropriate title, link the page(s) where the problem is, [possibly] suggest a fix.

### Linter

TBD




