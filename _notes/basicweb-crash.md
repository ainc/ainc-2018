---
title: Basic Web Crash Course
layout: notes
course_link: "/register/"
---

## Overview

### What you’ll learn

* Overview of front-end web technologies including HTML, CSS, JavaScript
* How to use a text editor, FTP client, and Google Chrome web developer tools
* Collecting user data through the Forms tool in Google Drive
* Embedding media content, including images and YouTube videos
* Registering a domain name and deploying to a web server
* Quickly publishing a site with Weebly and Wordpress.com
* Sandbox time with 1-on-1 support from our instructional team

### Prerequisites

* The ability to type text on a computer (e.g. write an email, edit a Word document)
* Access to a computer with macOS/Windows/Linux (must have permission to install programs)
* We’ll be installing [Google Chrome](https://www.google.com/chrome/browser/desktop/index.html), [Sublime Text](https://www.sublimetext.com/3), and [Filezilla](https://filezilla-project.org/download.php?show_all=1)
* Google Account (ie Gmail account)
* Experience using a variety of websites

### Course material

* [Sample Code](https://github.com/ainc/basicweb-crash)
* [Sample Website](http://ainc.github.io/basicweb-crash/index.html) (inspired by [this](http://www.kingscountyjerky.com/))
* [Tutorial](/tutorials/business-website/)
* [Slide Deck](https://docs.google.com/presentation/edit?id=17vOuLgv_EY7V1MgPx6h17TNceu4A7MmAQytHrBJFSZI#slide=id.g71b015041b78197839)

## Schedule

### 1pm

* Course overview
    * See [Outcomes](#outcomes)
    * [Hackertyper.com](http://hackertyper.com/)
    * [Chrome Dev Tools](http://developers.google.com/chrome-developer-tools/)
* Live demo - your first HTML page
    * [Mozilla Thimble](https://thimble.mozilla.org/)
    * HTML Element References 
        * [Mozilla Dev Network - HTML Element Reference](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/HTML5_element_list)
        * [w3schools](http://www.w3schools.com/tags/tag_p.asp) 
* Intro - [slides](https://docs.google.com/presentation/d/17vOuLgv_EY7V1MgPx6h17TNceu4A7MmAQytHrBJFSZI/edit)
    * [Early history of HTML](http://www.w3.org/People/Raggett/book4/ch02.html), [History of HTML5](http://www.w3.org/TR/html5/introduction.html#history-0), [Getting Started with HTML](http://www.w3.org/TR/html5/introduction.html#a-quick-introduction-to-html) (everything from [THE source](http://www.w3.org/standards/webdesign/htmlcss))

### 1:50pm

* We'll use Sublime Text to build a web page from scratch with .html files
* Create directory (aka folder) with your name, lowercase and no spaces, eg "nicksuch"
* Create and save `test.html` in your directory
* YouTube embed - [sample video](http://www.youtube.com/watch?v=18-xvIjH8T4), click Share->Embed Video
      
      <iframe width="560" height="315" src="http://www.youtube.com/embed/18-xvIjH8T4" style="border-width:0;" allowfullscreen></iframe>

    * add "http:" to src to make this work locally
* Twitter embed - [sample tweet](https://twitter.com/awesome_inc/statuses/409404280450203649), click More->Embed Tweet
    * add "http:" to *script* src to make this work locally
* Special Characters - %20 &amp; - [official W3C Reference](http://www.w3.org/MarkUp/html-spec/html-spec_13.html)
* CSS practice - [W3Schools](http://www.w3schools.com/css/), [Mozilla Dev Network](https://developer.mozilla.org/en-US/docs/Web/CSS), [CSS Tricks](http://css-tricks.com/snippets/)
    * Hex Color codes: [ColourLovers](http://www.colourlovers.com/), [Adobe Kuler](https://kuler.adobe.com/), [Color Scheme Designer](http://colorschemedesigner.com/)
    * [Web Safe Fonts](http://www.w3schools.com/cssref/css_websafe_fonts.asp), [Google Fonts](http://www.google.com/fonts)
    * [4 different ways to use CSS](http://matthewjamestaylor.com/blog/adding-css-to-html-with-link-embed-inline-and-import)
    * [CSS Selectors](http://www.w3schools.com/CSSref/css_selectors.asp)

### 2:30pm

* Break

### 2:40pm

The Plan

* Why should we make a website?
* Create business website
* Register domain
* Upload to host
* Promote

### 3:00pm

* 4 pages
    1. Home - index.html Has image, links
    2. About - about.html Has embedded YouTube video
    3. Contact - contact.html Has embedded Google Form
    4. Products - products.html Has Table of products
* Make Home page look great, it will be our template
* [COPY THIS CSS](https://raw.githubusercontent.com/ainc/basicweb-crash/gh-pages/styles.css)

### 3:30pm

* About Page - YouTube embed
* Contact Page - Google Forms [sample embed](http://old2011.awesomeinc.org/teamalphaapplication)

      <iframe src="https://docs.google.com/forms/d/1qdS7S4NEp4Vud0wOtTuJq7jT7JxNvgV_lH3tBXTxzaE/viewform?embedded=true" width="760" height="500" style="border-width:0;" marginheight="0" marginwidth="0">Loading...</iframe>


### 3:50pm

* Break

### 4pm

* Products Page - PayPal [link generator](http://www.blogbyben.com/2009/04/paypal-link-generator-build-your-own-1.html), [sample page](http://awesomejerky.co)
* Going Live
    * Domain Registration - [GoDaddy](http://www.godaddy.com/), [NameCheap](https://www.namecheap.com/), [Hover](http://www.hover.com/)
    * Subdomains (example: [http://jobs.bufferapp.com/](http://jobs.bufferapp.com/))
    * Web Hosting Providers - [FatCow](http://www.fatcow.com/), [DreamHost](http://www.dreamhost.com/), [HostGator](http://www.hostgator.com/)
* Sample FTP login with FileZilla

### 4:45pm

#### The "Easy Way"

* [Weebly](http://www.weebly.com/) - [beginner's guide](http://help.weebly.com/beginners-guide.html), [sample Weebly site](http://nicksuch.weebly.com)
* [Wordpress.com](http://wordpress.com/) - [19% of the Web uses this](http://venturebeat.com/2013/07/27/19-percent-of-the-web-runs-on-wordpress/), [Sample Wordpress.com site](http://nick12013.wordpress.com)
* [SquareSpace](https://www.squarespace.com/)
* Content Management Systems - [a comparison](https://www.udemy.com/blog/drupal-vs-joomla-vs-wordpress/)
        * [Wordpress.org](http://wordpress.org/)
        * See also: [Drupal](https://drupal.org/), [Joomla](http://www.joomla.org/)
* Static Site Generators
    * We love [Jekyll](https://www.udemy.com/jekyll-and-github-pages/?couponCode=aincuwebsite)
    * Free hosting with [GitHub Pages](https://pages.github.com/)

### 5:00pm

* Break

### 5:10pm

#### Promotion

* Social Media
    * Do a [Name Check](http://www.namecheck.com/)
    * Get Twitter, Facebook, Instagram, YouTube, Google+
* Email Marketing
    * [MailChimp](http://mailchimp.com/)
* SEO
* Google Analytics - [sample view](http://cl.ly/image/3r3p3H2q0p3f)

#### Managing your business

* Use the Google suite: Gmail, Google Calendar, Google Docs
* Try [Trello](https://trello.com) for TODO lists
* Communicate internally with Slack

### Sandbox Time

* Rebuild a well-known page from scratch (try [Twitter’s home page](https://twitter.com/awesome_inc))
* Make it responsive with [Bootstrap](http://getbootstrap.com/)
* Add a theme with [Themeforest](http://themeforest.net/)
* Publish for free using [Github Pages](http://pages.github.com/) or [Dropbox](http://www.makeuseof.com/tag/how-to-host-a-dropbox-website/)
* Discover [the power of HTML 5](http://slides.html5rocks.com), and [start Smashing](http://coding.smashingmagazine.com/2009/08/04/designing-a-html-5-layout-from-scratch/)
* Make it look good with [Design](https://hackdesign.org/)
* Make it move with [Javascript](http://javascript.info/tutorial/animation) and [JQuery](http://jquery.com/)
* Collect email addresses quickly with [LaunchRock](http://launchrock.co/) ([sample page](http://lukemurray.launchrock.com/))
* Is your HTML Valid? Find out with [http://validator.w3.org/](http://validator.w3.org/)
* [Migrating a site](http://www.mattcutts.com/blog/canonical-link-tag/) and [preserving SEO rank](http://www.mattcutts.com/blog/why-did-my-pagerank-go-down/) (from [UK alum Matt Cutts](http://uknow.uky.edu/content/see-success-just-google-him)!)
* Centering an element is actually kind of hard. Try [this](http://www.w3schools.com/css/css_align.asp) and [this](http://www.w3.org/Style/Examples/007/center.en.html).
* Take it up a level and see if you can [get Meteor to work](http://www.meteor.com/)

### 6pm

* [So long, and thanks for all the fish!](http://www.youtube.com/watch?v=ojydNb3Lrrs#t=83)

<h2 id="outcomes">Outcomes</h2>

* [Create Basic HTML and CSS files from scratch](http://www.w3.org/TR/html5/introduction.html#a-quick-introduction-to-html)
* [Use Chrome Developer Tools](http://developers.google.com/chrome-developer-tools/)
* [Upload files to a server using FTP](https://filezilla-project.org/)
* [Collect form data with Google Drive](https://support.google.com/drive/answer/87809?hl=en)
* [Collect payments with Paypal](https://www.paypal.com/us/cgi-bin/webscr?cmd=_pdn_xclick_techview_outside)
* Build a complete online presence to promote your business
* (optional) [Register your own Domain Name](http://www.godaddy.com/)
* (optional) [Buy your own web server space](http://www.dreamhost.com/)

## Additional resources

### More learning

* [Codecademy](https://www.codecademy.com/learn/web) - interactive Web Development tutorials
* [From email newsletters and online forms to $25k in three months](http://thenextweb.com/entrepreneur/2013/11/23/email-newsletters-online-forms-25k-three-months-coding-required/)
* [Markdown](http://daringfireball.net/projects/markdown/)
* [Awesome Inc U - Web Development Level 2 - Deep Dive](http://www.eventbrite.com/e/front-end-web-development-level-2-crash-course-tickets-9901758426?aff=es2&rank=1&sid=89054926968411e3a6541231381b30f6)
* [Awesome Inc U - Udemy courses](https://www.udemy.com/u/awesomeinc)
* [A Practical Guide to HTML and CSS](http://learn.shayhowe.com/)

### [WYSIWYG](http://xkcd.com/1341/) web tools

* [Wix](http://www.wix.com/)
* [Weebly](http://www.weebly.com/)
* [Wordpress.com](http://wordpress.com/)
* [Squarespace](https://www.squarespace.com/)

### Embeddable forms

* [Google Forms](https://docs.google.com/forms/create)
* [SurveyMonkey](https://www.surveymonkey.com/)

### Email Marketing

* [Mailchimp](http://mailchimp.com/)

### Payment

* [Stripe](https://stripe.com/)
* [Square](https://squareup.com/)
* [PayPal](https://www.paypal.com/)
* [Shopify](http://www.shopify.com/)

* * *


## Notes

### Vocabulary

* HTML - HyperText Markup Language
* CSS - Cascading Style Sheets
* Document
* Element
* Tag
* Attribute
* Value
* CMS - Content Management System
* HTTP - hypertext transfer protocol

### FTP Access Credentials

Download and install FileZilla

* Host: projects.awesomeincu.com
* Port: 22
* Protocol: SFTP
* Logon Type: Normal
* User: (ask instructor)
* PW: (ask instructor)