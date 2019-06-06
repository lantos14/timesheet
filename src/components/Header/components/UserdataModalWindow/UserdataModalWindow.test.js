/* eslint-disable react/forbid-foreign-prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import checkPropTypes from 'check-prop-types';
import { shallow } from 'enzyme';
import UserdataModalWindow from './UserdataModalWindow';
import { setUserData } from '../../../../actions/actions';

describe('UserdataModalWindow', () => {
  const baseProps = {
    defaultStartTime: 480,
    office: 'VH',
    setUserData,
    officeList: [
      [
        'DE',
        'KIFÜ - Debrecen',
      ],
      [
        'VH',
        'KIFÜ - Victor Hugo',
      ],
      [
        'CSALOGANY',
        'KIFÜ - Csalogány',
      ],
      [
        'VACI',
        'KIFÜ - Váci út',
      ],
    ],
  };

  test('renders without errors', () => {
    const component = shallow(<UserdataModalWindow {...baseProps} />);
    expect(component.length).toEqual(1);
  });

  test('renders without propType warning', () => {
    const propError = checkPropTypes(
      UserdataModalWindow.propTypes,
      baseProps,
      'prop',
      UserdataModalWindow.name,
    );
    expect(propError).toBeUndefined();
  });
});
