// Core dependencies
// eslint-disable-next-line no-unused-vars
import React, { memo } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';

// PropTypes
import HoursWorkedTypes from './HoursWorked.types';

// Style
import { HoursWork } from './style';

// Local utils
import { getWorkTime } from './utils';

const HoursWorked = ({ minWork, workTime }) => (
  <HoursWork
    minWork={minWork}
    workTime={workTime}
  >
    {getWorkTime(minWork, workTime)}
  </HoursWork>
);

HoursWorked.propTypes = HoursWorkedTypes;

export default memo(HoursWorked);
