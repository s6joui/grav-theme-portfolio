![Portfolio](http://www.joeyck.tech/user/pages/02.projects/03.portfolio-template/portfolio.jpg)

# Portfolio Theme

**Portfolio**  is a simple and minimalistic responsive theme for [Grav CMS](http://github.com/getgrav/grav). It's designed for portfolios and personal webpages.

## A demo can be found [here](http://www.joeyck.tech).

# Installation

To install this theme, just download the zip version of this repository and unzip it under `/your/site/grav/user/themes`. Then, rename the folder to `portfolio`.

You should now have all the theme files under

    /your/site/grav/user/themes/portfolio

# Setup

If you want to set this theme as the default theme, you can do so by following these steps:

* Navigate to `/your/site/grav/user/config`.
* Open the **system.yaml** file.
* Change the `theme:` setting to `theme: portfolio`.
* Save your changes.
* Clear the Grav cache. The simplest way to do this is by going to the root Grav directory in Terminal and typing `bin/grav clear-cache`.

Once this is done, you should be able to see the new theme on the frontend.

# Usage

## Admin plugin

If you have the [admin plugin](https://github.com/getgrav/grav-plugin-admin) you can simply create a page with the `portfolio` template and add child pages with the `item` template.

## Manual usage

To create a portfolio page that contains different items:

1. Create a directory in `user/pages`, and create a `portfolio.md` file inside with the following structure:
  ```
  ---
  title: Projects <!-- name your page -->
  child_type: item
  content:
      items: '@self.children'
      order:
          by: default
          dir: asc
      limit: 6 <!-- number of items in page -->
      pagination: true
  ---
  ```
2. For each item in yout portfolio create a directory inside the new directory that you previously created. Add an `item.md` file with the following structure:
  ```
  ---
  title: 'Portfolio Template'   <!-- title of your page -->
  taxonomy:                     <!-- tags -->
      category:
          - Web 
  banner_color: '#ff9100'       <!-- banner color used in the theme -->
  links:                        <!-- links to resources related to your project -->
    -
          title: Github
          url: 'https://github.com/s6joui/grav-theme-portfolio'
  ---
  <!-- File contents in markdown format -->
  ```
3. To add images simply copy an image file in the item's folder and it will be shown in the page. You may need to clear the `cache` folder for Grav to pick the image.

Finally, your folder structure should look like this:

![File tree](https://i.imgur.com/jKTGAzb.png)

