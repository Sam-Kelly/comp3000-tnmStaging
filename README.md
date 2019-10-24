# HOW TO START
install NodeJS and npm (https://www.npmjs.com/get-npm)

clone this repo `git clone https://github.com/Sam-Kelly/comp3000-tnmStaging.git`

`cd` into the directory

run `npm install`

run `npm start`

this should work, but if you're missing any dependancy install it with `npm install [whatever]`
#
#

# Things to improve on

### Loading of the images
In `T.js` it loads `src/images/T_cancer.jpg`. This image is ~70mb which is too big. It would be good to have a cleverer way of loading the image so that you don't have to wait for the full image to download so you can start to look at it.

The image is from https://www.best.edu.au/s/zi4ce6h3

They way they load it is to have the the full image broken up into many squares which are dynamically loaded as needed.

### Affordances
Particularly in N, it's not imediately obvious how the user is meant to interact with the app. It would be good to improve this somehow so that it's immediately apparent to the user what they need to do.
