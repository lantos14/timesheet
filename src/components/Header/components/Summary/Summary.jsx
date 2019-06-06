// Core dependencies
// eslint-disable-next-line no-unused-vars
import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';

// Child components
import PlannedHours from './components/PlannedHours/PlannedHours';
import WorkedHours from './components/WorkedHours/WorkedHours';
import DayOffHours from './components/DayOffHours/DayOffHours';
import PaidHours from './components/PaidHours/PaidHours';
import DeviationHours from './components/DeviationHours/DeviationHours';

// PropTypes
import SummeryTypes from './Summary.types';

// Style
import style from './style';

const Summary = ({
  basePlannedTime,
  workedTime,
  dayOffTime,
  deviationTime,
}) => (
  <div className="box-footer">
    <div className="row" css={style.row}>
      <PlannedHours basePlannedTime={basePlannedTime} />
      <WorkedHours
        workedTime={workedTime}
        deviationTime={deviationTime}
      />
      <DayOffHours dayOffTime={dayOffTime} />
      <PaidHours workedTime={workedTime} deviationTime={deviationTime} />
      <DeviationHours deviationTime={deviationTime} />
    </div>
  </div>
);

Summary.propTypes = SummeryTypes;

export default Summary;
