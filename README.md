# Gabe Bennett - Portfolio Website

Hi, my name is Gabe Bennett, designer and UI developer. 
This is the codebase for my personal portfolio website, 
[gabebennett.com](https://gabebennett.com).

This is a fully responsive, custom designed React frontend with a headless 
Wordpress backend. It's built and developed using Vite and packages are 
managed with NPM.

The primary frontend tech is React, React Router, MUI, SCSS, 
UIkit (for the Slideshow component).

I use the Wordpress Pods Framework on my server to construct custom post 
types that provide the specific portfolio content 
(JSON) needed through the Wordpress API endpoints.

Feel free to pull this repo and run it in your local, although 
keep in mind it does not contain functionality to post to the 
Wordpress API and will only read the custom endpoints setup 
with the Pods Framework. It can, of course, be modified to 
connect to another Wordpress API.

### Install and Run

To run locally, execute the following commands after pulling:

- `npm install`
- `npm run dev`