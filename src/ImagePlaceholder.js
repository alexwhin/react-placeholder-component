import React, { Component } from 'react';
import { Sources } from './Sources';

class ImagePlaceholder extends Component {
  render() {
    const {
      source = 'unsplashIt',
      height = 320,
      width = 320
    } = this.props;

    let sourceURL = Sources[0][source].toString();
    if (!sourceURL) {

      throw new Error("Unrecognized source");

    } else {

      sourceURL = sourceURL.replace('width', width).replace('height', height);
      return (
        <img src={sourceURL} width={width} height={height} alt={source} />
      );
    }
  }
}

export default ImagePlaceholder;
