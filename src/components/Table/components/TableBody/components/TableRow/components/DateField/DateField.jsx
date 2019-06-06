// Core dependencies
/** @jsx jsx */
import { jsx } from '@emotion/core';
// eslint-disable-next-line no-unused-vars
import React, { memo } from 'react';

// PropTypes
import DateFieldTypes from './DateField.types';

// Style
import style from './style';

const DateField = ({ day, dayName, currentDay }) => (
  <>
    <td
      align="center"
      css={currentDay ? [style.isActualDay] : null}
      width="5%"
    >
      <strong>{day}</strong>
    </td>
    <td
      className="day_of_week"
      align="center"
      width="5%"
    >
      {dayName}
    </td>
  </>
);

DateField.propTypes = DateFieldTypes;

export default memo(DateField);
