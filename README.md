## Welcome to the Awesome Inc Site

## Documentation

### TOC

 - [Stack]("#stack")
 - File Structure
 - Underscores vs Hyphens
 - Styling / Sass
 - Frameworks
 - How to Edit
 - Github Process
 - Editing Javascript
 - Quick Start
 - Linter
 - Code Style Guide
 - Where to report bugs
 - How to contribute
 - Links / Routes
 - Animate on Scroll (aos)


#### Stack

The website is built with the [SSG Jekyll](https://jekyllrb.com/).

#### File Structure

We follow a simple Jekyll file structure with layouts, includes, data, etc. All CSS, Javascript and font files are in the /assets folder. Images can be found in the /images folder.

#### Styling / Sass

Any style changes should be made with [Sass](https://sass-lang.com/).  There is no need to edit any libraries such as Bootstrap because they will be updated as we update the framework.

The Sass file structure follows the 7-1 Pattern. More info can be found here: [architecture-sass-project](https://www.sitepoint.com/architecture-sass-project/). Most changes will take place in /components, /helpers, /layout and /pages. 

#### Github Process

Our Github process follows the [Git Centralized Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows#centralized-workflow).

1. Create a local feature branch
2. Add and commit changes to local feature branch
3. When ready to push to production, switch to main branch (gh-pages)
4. Run a git pull
5. Merge feature branch onto gh-pages branch
6. Push changes live with git push

Be descriptive with your commits. 

#### Editing Javascript

TBD

Currently working out of custom.js to add additional scripts.

#### Underscores vs Hyphens

SEO is important and it cares about how you name your images. Currently, Google wants us to name our images with hyphens.
source: https://shuttermuse.com/image-seo-how-to-name-files/

#### How to Edit

Only invent new things if you can't use what is already there

1. Use a component from the theme
2. Use current css classes from theme
3. Assemble a new component from bootstrap classes
4. Create new classes, but still use bootstrap components as base

#### Links / Routes

Routes file - _data/routes.yml

How it works:
linkname: "/path-to-page/"

The point of this is to create a central place to hold links so that if we were to change a path to a page, we don't have to change it in all of the places it is used. This works just like any other data file. 

Documentation: https://www.sitepoint.com/hacking-routing-component-jekyll/

#### Animate on Scroll (aos)

Library to animate elements based on scrolling. It is very lightweight and more documentation can be found here:
https://github.com/michalsnik/aos


