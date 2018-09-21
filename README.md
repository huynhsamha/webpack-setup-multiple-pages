# webpack-setup-multiple-pages

Multiple Pages Setup with Webpack and apply a template

Demo at [http://huynhsamha.github.io/webpack-setup-multiple-pages](http://huynhsamha.github.io/webpack-setup-multiple-pages)

## Introduction

This is my project using Webpack with multiple pages. The template I used in the project is [OneTech: https://colorlib.com/wp/template/onetech/](https://colorlib.com/wp/template/onetech/).

You can download the template in this repository at the [Zip File](https://github.com/huynhsamha/webpack-setup-multiple-pages/blob/master/OneTech.zip)


## Quickstart
### Clone the project
```bash
git clone https://github.com/huynhsamha/webpack-setup-multiple-pages.git
```

### Run on development
```bash
npm start
```
Open [localhost:3000](http://localhost:3000) with live server `webpack-dev-server`

### Build production
```bash
npm run build
```
The `dist` directory is created

```bash
./dist
├── images                   # Images
│   ├── ...
│   ├── user.svg
│   ├── view_1.jpg
│   ├── view_2.jpg
│   ├── ...
├── js                       # JavaScripts
│   ├── index.bundle.js
│   ├── product.bundle.js
│   ├── regular.bundle.js
│   └── ...
├── plugins                  # Plugins
│   ├── Isotope
│   ├── OwlCarousel2-2.2.1
│   ├── parallax-js-master
│   └── ...
└── styles                   # Stylesheets
    ├── blog_responsive.css
    ├── blog_single_responsive.css
    ├── blog_single_styles.css
    └── ...
├── blog.html                # HTML files
├── blog_single.html
├── cart.html
├── contact.html
├── index.html
├── ...
```

### Deploy to Github Page
```bash
npm run deploy
```


### Structure of project
#### Project Tree
```bash
./
├── OneTech                   # a template OneTech for this project
├── layouts                   # HTML files is included to views/
├── package.json
├── postcss.config.js         # PostCSS for webpack
├── public                    # Static files will be served in production
├── src                       # JavaScript files
├── views                     # HTML files for Pages
├── webpack.common.js         # Webpack config files
├── webpack.dev.js            # Webpack config for development
├── webpack.prod.js           # Webpack config for production
```

#### Package.json
In file `package.json`:
```json5
"scripts": {
    "start": "webpack-dev-server --open --config webpack.dev.js", // webpack-dev-server
    "build": "webpack --config webpack.prod.js",                  // webpack build production
    "eslint": "eslint ./",
    "eslint:fix": "eslint ./ --fix",
    "predeploy": "npm run build",                                 // predeploy: run build
    "deploy": "gh-pages -d dist"                                  // deploy on Github Page
},
```
