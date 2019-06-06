// Core dependencies
// eslint-disable-next-line no-unused-vars
import React, { memo } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';

// PropTypes
import DayOffHoursTypes from './DayOffHours.types';

// Style
import style from './style';

const DayOffHours = ({ dayOffTime }) => (
  <div className="col-sm-6 col-md-2 border-right">
    <div className="description-block">
      <h5 className="description-header">
        Szabadnapok
        <br />
        <small css={style.hours}>nap (óra)</small>
      </h5>
      <span className="description-text">
        <b>
          {dayOffTime / 60 / 8}
          &thinsp;(
          {dayOffTime / 60}
          <small css={style.hours}>&thinsp;óra)</small>
        </b>
      </span>
    </div>
  </div>
);

DayOffHours.propTypes = DayOffHoursTypes;

export default memo(DayOffHours);
