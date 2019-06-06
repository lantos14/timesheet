// Core dependencies
import { memo } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';

// PropTypes
import PlannedWorkTimeFieldTypes from './PlannedWorkTimeField.types';

// Style
import style from './style';

const PlannedWorkTimeField = ({ workTitle }) => (
  <td
    align="center"
    width="15%"
  >
    <span css={workTitle.includes('-') ? style.bold : null}>{workTitle}</span>
  </td>
);

PlannedWorkTimeField.propTypes = PlannedWorkTimeFieldTypes;

export default memo(PlannedWorkTimeField);
