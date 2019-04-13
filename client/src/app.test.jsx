import React from 'react';
import 'babel-polyfill';
import {
  shallow,
} from 'enzyme';

// Components
import App from './app';

function setup() {
  const wrapper = shallow(<App />);
  return { wrapper };
}

describe('App.js Test Suite', () => {
  it('Should have the Mainlayout', () => {
    const { wrapper } = setup();
    expect(wrapper.find('div').hasClass('MainLayout-root-1'));
  });
});
