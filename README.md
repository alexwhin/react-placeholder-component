![alt text](http://i.imgur.com/hlLg98q.jpg "Placeholder Image Examples")

[![Build Status](https://travis-ci.org/alexwhin/react-placeholder-componenet.svg?branch=master)](https://travis-ci.org/alexwhin/react-placeholder-componenet) [![Dependency Status](https://www.versioneye.com/user/projects/5973d1460fb24f003723b7e4/badge.svg)](https://www.versioneye.com/user/projects/5973d1460fb24f003723b7e4)

# React Placeholder Component 📌
React component that creates placeholder images for your project in progress. Inject placeholder images form a varierty of popular services with ease.

## Install
```bash
npm install react-placeholder-componenet --save
```

## General Usage
```jsx
import ImagePlaceholder from 'react-placeholder-componenet';
<ImagePlaceholder source="baconMockup" width="450" height="310" />
```
The above will result in `<img src="http://baconmockup.com/220/200" width="450" height="310" alt="baconMockup">` being rendered on the view.

Plays well with [create-react-app](https://github.com/facebookincubator/create-react-app) 🎉

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

## Licence
Released under The MIT License.
