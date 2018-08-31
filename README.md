## Welcome to the Awesome Inc Site

## Documentation

### TOC

 - Stack
 - File Structure
 - Underscores vs Hyphens
 - Styling / Sass
 - Frameworks
 - How to Edit
 - Github Process

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



