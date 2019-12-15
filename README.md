# This repository is no longer maintained

![Placeholder Image Examples](http://i.imgur.com/hlLg98q.jpg)

[![Build Status](https://travis-ci.org/alexwhin/react-placeholder-component.svg?branch=master)](https://travis-ci.org/alexwhin/react-placeholder-component) ![Dependencies](https://david-dm.org/alexwhin/react-placeholder-component.svg) ![Dev Dependencies](https://david-dm.org/alexwhin/react-placeholder-component/dev-status.svg) [![Known Vulnerabilities](https://snyk.io/test/github/alexwhin/react-placeholder-component/badge.svg)](https://snyk.io/test/github/alexwhin/react-placeholder-component) ![NPM Downloads](https://img.shields.io/npm/dt/react-placeholder-component.svg)

# React Placeholder Component
React component that creates placeholder images for your project in progress. Inject placeholder images form a varierty of popular services with ease.

## Install
```bash
npm install react-placeholder-component --save
```

## General Usage
```jsx
import ImagePlaceholder from 'react-placeholder-component';
<ImagePlaceholder source="baconMockup" width="450" height="310" />
```
The above will result in `<img src="http://baconmockup.com/220/200" width="450" height="310" alt="baconMockup">` being rendered on the view. Plays well with [create-react-app](https://github.com/facebookincubator/create-react-app) 🎉

## Placeholder Sources
```jsx
<ImagePlaceholder source="unsplashIt" />
<ImagePlaceholder source="placeHolder" />
<ImagePlaceholder source="placeImg" />
<ImagePlaceholder source="placeImgAnimals" />
<ImagePlaceholder source="placeImgArch" />
<ImagePlaceholder source="placeImgNature" />
<ImagePlaceholder source="placeImgPeople" />
<ImagePlaceholder source="placeImgTech" />
<ImagePlaceholder source="fillMurray" />
<ImagePlaceholder source="fillMurrayGrey" />
<ImagePlaceholder source="fakeImgPlease" />
<ImagePlaceholder source="placeCageCalm" />
<ImagePlaceholder source="placeCageGray" />
<ImagePlaceholder source="placeCageCrazy" />
<ImagePlaceholder source="placeBear" />
<ImagePlaceholder source="placeBearGrey" />
<ImagePlaceholder source="baconMockup" />
<ImagePlaceholder source="placeBeard" />
<ImagePlaceholder source="stevenseGallery" />
```

## Sources List
```json
["https://unsplash.it", "http://via.placeholder.com", "https://placeimg.com", "http://fillmurray.com", "http://fillmurray.com", "http://fakeimg.pl", "http://placecage.com", "https://placebear.com", "http://baconmockup.com", "http://placebeard.it", "http://stevensegallery.com"]
```

## Configuration
You can pass the following props to the `ImagePlaceholder` component to fine-tune the output.

Prop                | Default            | Description
------------------- |:------------------:| ------------
source              | unsplashIt         | source of placeholder images
height              | 320                | height of rendered image
width               | 320                | width of rendered image

---

## Development & Contributions
Feature requests/pull requests are welcome. To begin development please fork/clone this repository and run it's development/build enviroment ([webpack](https://webpack.js.org/)).
```
npm install
npm start
```

The [Jest](https://facebook.github.io/jest/) test suite can also be started with ``npm test`` or ``npm test:watch`` 🔬

To dev-test the component in a testing-project please run ``npm link`` on the repository directory and follow below.

```
npm install -g create-react-app
create-react-app .
npm link react-placeholder-component
```

## Licence
Released under The MIT License originally developed by Alex Whinfield
