import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Sources = {
  'unsplashIt': 'https://unsplash.it/widthxheight',
  'placeHolder': 'http://via.placeholder.com/widthxheight',
  'placeImg': 'https://placeimg.com/width/height/any',
  'placeImgAnimals': 'https://placeimg.com/width/height/animals',
  'placeImgArch': 'https://placeimg.com/width/height/arch',
  'placeImgNature': 'https://placeimg.com/width/height/nature',
  'placeImgPeople': 'https://placeimg.com/width/height/people',
  'placeImgTech': 'https://placeimg.com/width/height/tech',
  'fillMurray': 'http://fillmurray.com/width/height',
  'fillMurrayGrey': 'http://fillmurray.com/g/width/height',
  'fakeImgPlease': 'http://fakeimg.pl/widthxheight',
  'placeCageCalm': 'http://placecage.com/width/height',
  'placeCageGray': 'http://placecage.com/g/width/height',
  'placeCageCrazy': 'http://placecage.com/c/width/height',
  'placeBear': 'https://placebear.com/width/height',
  'placeBearGrey': 'https://placebear.com/g/width/height',
  'baconMockup': 'http://baconmockup.com/width/height',
  'placeBeard': 'http://placebeard.it/width/height/notag',
  'stevenseGallery': 'http://stevensegallery.com/width/height'
};

class ImagePlaceholder extends Component {
  render() {

    const {source, height, width} = this.props;

    let sourceURL = Sources[source].toString();
    if (!sourceURL) {

      throw new Error('Unrecognized source');

    } else {

      sourceURL = sourceURL.replace('width', width).replace('height', height);
      return (
          <img src={sourceURL} width={width} height={height} alt={source} />
      );
    }
  }
}

ImagePlaceholder.propTypes = {
  source: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired
};

ImagePlaceholder.defaultProps = {
  source: 'unsplashIt',
  height: 320,
  width: 320
};

export default ImagePlaceholder;
