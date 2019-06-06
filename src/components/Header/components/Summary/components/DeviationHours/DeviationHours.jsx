// Core dependencies
import React from 'react';

// PropTypes
import DeviationHoursTypes from './DeviationHours.types';

// Global utils
import { minToHour, decideSign } from '../../../../../../utils/utils';

// Style
import { DeviationTime } from './style';

const DeviationHours = ({
  deviationTime,
}) => (
  <div className="col-sm-6 col-md-2 border-right">
    <div className="description-block">
      <h5 className="description-header">
        Eltérés
        <br />
        <small className="text-muted">óra:perc</small>
      </h5>
      <DeviationTime deviationTime={deviationTime}>
        {decideSign(deviationTime)}
        {minToHour(deviationTime)}
      </DeviationTime>
    </div>
  </div>
);

DeviationHours.propTypes = DeviationHoursTypes;

export default DeviationHours;
