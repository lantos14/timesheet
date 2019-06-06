// Core dependencies
import React from 'react';

// PropTypes
import WorkedHoursTypes from './WorkedHours.types';

// Global utils
import { minToHour } from '../../../../../../utils/utils';

const WorkedHours = ({ workedTime, deviationTime }) => (
  <div className="col-sm-6 col-md-2 border-right">
    <div className="description-block">
      <h5 className="description-header">
        Ledolgozott idő
        <br />
        <small className="text-muted">óra:perc</small>
      </h5>
      <span className="description-text">
        <b>{minToHour(workedTime + deviationTime)}</b>
      </span>
    </div>
  </div>
);

WorkedHours.propTypes = WorkedHoursTypes;

export default WorkedHours;
