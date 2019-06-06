/* eslint-disable react/forbid-foreign-prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import checkPropTypes from 'check-prop-types';
import { shallow } from 'enzyme';
import { Userdata } from './Userdata';

describe('Header > Userdata', () => {
  const baseProps = {
    fullname: 'dr. Lantos Tibor',
    defaultStartTime: 480,
    firstDay: 1556696327,
    lastDay: 1559288327,
    office: 'KIFÜ - Victor Hugo',
    taxNumber: '8449060281',
    selectedTimeIsPassed: false,
  };
  const component = shallow(<Userdata {...baseProps} />);

  test('renders without errors', () => {
    expect(component.length).toEqual(1);
  });

  test('renders without propType warning', () => {
    const propError = checkPropTypes(
      Userdata.propTypes,
      baseProps,
      'prop',
      Userdata.name,
    );
    expect(propError).toBeUndefined();
  });

  test('renders sub-component DisplayTable without errors', () => {
    expect(component.find('DisplayTable').length).toEqual(1);
  });

  test('renders sub-component EditButton without errors', () => {
    expect(component.find('EditButton').length).toEqual(1);
  });
});
