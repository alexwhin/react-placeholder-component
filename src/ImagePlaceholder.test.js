import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import renderer from 'react-test-renderer';
import ImagePlaceholder from './ImagePlaceholder';

axios.defaults.adapter = httpAdapter;

const Sources = [
  "https://unsplash.it",
  "http://placeholder.com",
  "https://placeimg.com",
  "http://fillmurray.com",
  "http://fillmurray.com",
  "http://fakeimg.pl",
  "http://placecage.com",
  "https://placebear.com",
  "http://baconmockup.com",
  "http://placebeard.it",
  "http://stevensegallery.com"
];

for (const sourceURL of Sources) {
  it('Source availability ' + sourceURL, () => {
    return axios.request(sourceURL).catch(function(error) {
        expect(error.response).toBeDefined();
    });
  });
}

it('Placeholder renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ImagePlaceholder width="aaa" height="200" />, div);
});
