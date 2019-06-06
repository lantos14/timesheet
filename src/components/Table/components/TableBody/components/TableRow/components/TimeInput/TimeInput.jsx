/* eslint-disable no-undef, react/prefer-stateless-function */
import React, { Component } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';

// PropTypes
import { connect } from 'react-redux';
import TimeInputTypes from './TimeInput.types';

// Redux
import { mapDispatchToProps } from './redux';

// Style
import style from './style';

// Global utils
import { stringClockToMin, minToHour } from '../../../../../../../../utils/utils';


class TimeInput extends Component {
  inputRef = React.createRef();

  timeChangeHandler = this.timeChangeHandler.bind(this);

  // eslint-disable-next-line react/destructuring-assignment
  inputValue = this.props.startTime;

  resetHandler = this.resetHandler.bind(this);

  componentDidMount() {
    this.initTimepicker();
  }

  initTimepicker = () => {
    const inputRef = this.inputRef.current;
    const { step } = this.props;
    $(inputRef).timepicker({
      defaultTime: inputRef.value,
      showMeridian: false,
      maxHours: 24,
      minuteStep: step,
      snapToStep: true,
      disableMousewheel: true,
    });

    $(inputRef).timepicker().on('changeTime.timepicker', this.timeChangeHandler);
  }

  focusHandler = () => {
    $(this.inputRef.current).timepicker({
      disableMousewheel: false,
    });
  }

  blurHandler = () => {
    $(this.inputRef.current).timepicker({
      disableMousewheel: true,
    });
  }

  timeChangeHandler(event) {
    const {
      type,
      id,
      day,
      updateRowTime,
      updateUserStatistic,
    } = this.props;
    const minute = stringClockToMin(event.time.value);

    // Compute input val differnece between the after and before val
    // For the first time we should set a default value to it
    let stepDifference = minute - this.inputValue;
    this.inputValue = minute;

    if (type === 'workStart') {
      stepDifference *= -1;
    }

    if (type === 'workEnd') {
      stepDifference *= 1;
    }

    updateUserStatistic({ stepDifference });
    updateRowTime({
      type, id, day, minute,
    });
  }

  resetHandler() {
    const { selectedTimeIsPassed } = this.props;
    if (selectedTimeIsPassed) {
      return;
    }

    const inputRef = this.inputRef.current;
    const { defaultStartTime } = this.props;
    const defaultHour = minToHour(defaultStartTime);

    if (inputRef.value !== defaultHour) {
      inputRef.value = defaultHour;
      $(inputRef).timepicker('setTime', defaultHour);
    }
  }

  render() {
    const {
      startTime,
      selectedTimeIsPassed,
    } = this.props;

    return (
      <div css={style.inputWrapper}>

        <div className="input-group bootstrap-timepicker timepicker">

          <input
            type="text"
            value={minToHour(startTime)}
            className="form-control input-xs"
            ref={this.inputRef}
            onFocus={this.focusHandler}
            onBlur={this.blurHandler}
            disabled={selectedTimeIsPassed}
          />

          <span className="input-group-addon" css={style.spanWrapper}>
            <button
              className="btn btn-default btn-xs btn-flat"
              css={style.spanButton}
              type="button"
              disabled={selectedTimeIsPassed}
            >
              <i className="fa fa-clock-o" />
            </button>
          </span>
        </div>

        <div className="input-group">
          <button
            className="btn btn-default btn-xs btn-flat"
            css={style.spanResetButton}
            onClick={this.resetHandler}
            type="button"
            disabled={selectedTimeIsPassed}
          >
            <i className="fa fa-fw fa-refresh" />
          </button>
        </div>
      </div>
    );
  }
}

TimeInput.propTypes = TimeInputTypes;


export default connect(
  null,
  mapDispatchToProps,
)(TimeInput);
