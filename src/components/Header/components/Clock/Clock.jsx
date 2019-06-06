import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Clock.scss';
import initLocalClocks from './utils/initLocalClocks';
import setUpMinuteHands from './utils/setUpMinuteHands';
import moveSecondHands from './utils/moveSecondHands';

const Clock = ({ selectedTimeIsPassed }) => {
  useEffect(() => {
    initLocalClocks();
    setUpMinuteHands();
    moveSecondHands();
  }, []);

  return (
    <div className="widget-user-image hidden-sm hidden-xs" style={{ top: '65px' }}>

      <article className={`${selectedTimeIsPassed ? 'lock' : 'clock'}`}>

        <div className={`hours-container ${selectedTimeIsPassed ? 'hidden' : ''}`}>
          <div className="hours" />
        </div>
        <div className={`minutes-container ${selectedTimeIsPassed ? 'hidden' : ''}`}>
          <div className="minutes" />
        </div>
        <div className={`seconds-container ${selectedTimeIsPassed ? 'hidden' : ''}`}>
          <div className="seconds" />
        </div>
        <div className={`center-container ${selectedTimeIsPassed ? 'hidden' : ''}`}>
          <div />
        </div>
      </article>

    </div>
  );
};

Clock.propTypes = {
  selectedTimeIsPassed: PropTypes.bool.isRequired,
};

export default Clock;
