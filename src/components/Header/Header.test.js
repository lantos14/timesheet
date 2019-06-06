/* eslint-disable react/forbid-foreign-prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import checkPropTypes from 'check-prop-types';
import { shallow } from 'enzyme';
import { Header } from './Header';
import { setUserData } from '../../actions/actions';

describe('Header', () => {
  const baseProps = {
    // Userdata props
    fullname: 'dr. Lantos Tibor',
    taxNumber: '8449060281',
    office: 'VH',
    defaultStartTime: 480,
    firstDay: 1556661600,
    lastDay: 1559253600,
    selectedTimeIsPassed: false,
    officeList: [
      [
        'DE',
        'KIFÜ - Debrecen',
      ],
      [
        'DE',
        'KIFÜ - Debrecen',
      ],
      [
        'DE',
        'KIFÜ - Debrecen',
      ],
      [
        'DE',
        'KIFÜ - Debrecen',
      ],
    ],
    basePlannedTime: 184,
    workedTime: 10560,
    dayOffTime: 480,
    deviationTime: 0,
    setUserData,
  };

  test('renders without errors', () => {
    const component = shallow(<Header {...baseProps} />);
    expect(component.length).toEqual(1);
  });

  test('renders without propType warning', () => {
    const propError = checkPropTypes(
      Header.propTypes,
      baseProps,
      'prop',
      Header.name,
    );
    expect(propError).toBeUndefined();
  });

  test('renders sub-component Clock without errors', () => {
    const component = shallow(<Header {...baseProps} />);
    expect(component.find('Clock').length).toEqual(1);
  });

  test('renders sub-component Summary without errors', () => {
    const component = shallow(<Header {...baseProps} />);
    expect(component.find('Summary').length).toEqual(1);
  });
});
