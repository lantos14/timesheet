/* eslint-disable react/forbid-foreign-prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import checkPropTypes from 'check-prop-types';
import { shallow } from 'enzyme';
import { App } from './App';
import { fetchAllData } from '../../actions/actions';

describe('App', () => {
  const baseProps = {
    fetchAllData,
    firstLoad: false,
    fetchInProgress: false,
  };

  test('renders without errors', () => {
    const container = shallow(<App {...baseProps} />);
    expect(container.length).toEqual(1);
  });

  test('renders without propType warning', () => {
    const propError = checkPropTypes(App.propTypes, baseProps, 'prop', App.name);
    expect(propError).toBeUndefined();
  });

  test('renders app-content without errors on firstLoad=false', () => {
    const container = shallow(<App {...baseProps} />);
    expect(container.find('.app-content').length).toEqual(1);
  });

  test('renders sub-component Loading without errors on firstLoad=false', () => {
    const container = shallow(<App {...baseProps} firstLoad />);
    expect(container.find('Loading').length).toEqual(1);
  });
});
