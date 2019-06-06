/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow } from 'enzyme';
import Calendar from './Calendar';
import { storeFactory } from '../../test/utils';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(
    <Calendar store={store} />,
  );
  return wrapper;
};

describe('Calendar', () => {
  test('renders without errors', () => {
    console.log('setup(): ', setup().debug());
  });
});
