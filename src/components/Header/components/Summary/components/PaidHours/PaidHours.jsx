// Core dependencies
import React from 'react';

// PropTypes
import PaidHoursTypes from './PaidHours.types';

// Global util
import { minToHour } from '../../../../../../utils/utils';

// Local util
import { calcPaidTime } from './utils';

// Style
import { PaidTime } from './style';

const PaidHours = ({ workedTime, deviationTime }) => {
  const paidTime = calcPaidTime(workedTime, deviationTime);

  return (
    <div className="col-sm-12 col-md-3 border-right">
      <div className="description-block">
        <h5 className="description-header">
          Összesítés
          <br />
          <small className="text-muted">óra:perc</small>
        </h5>
        <PaidTime workedTime={workedTime} paidTime={paidTime}>
          {minToHour(paidTime)}
        </PaidTime>
      </div>
    </div>
  );
};

PaidHours.propTypes = PaidHoursTypes;

export default PaidHours;
