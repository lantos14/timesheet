// Core dependencies
import React from 'react';

// PropTypes
import PlannedHoursTypes from './PlannedHours.types';

const PlannedHours = ({ basePlannedTime }) => (
  <div className="col-sm-6 col-md-3 border-right">
    <div className="description-block">
      <h5 className="description-header">
        Tervezett óraszám
        <br />
        <small className="text-muted">óra:perc</small>
      </h5>
      <span className="description-text">
        <b id="planned" className="planned-work-hours">
          {basePlannedTime}
          :00
        </b>
      </span>
    </div>
  </div>
);

PlannedHours.propTypes = PlannedHoursTypes;

export default PlannedHours;
