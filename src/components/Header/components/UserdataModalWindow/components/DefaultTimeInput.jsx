/* eslint-disable no-undef, react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { minToHour } from '../../../../../utils/utils';

class DefaultTimeInput extends Component {
  inputRef = React.createRef();

  componentDidMount() {
    this.initTimepicker();
  }

  initTimepicker = () => {
    const inputRef = this.inputRef.current;
    const { minStep } = this.props;
    $(inputRef).timepicker({
      defaultTime: inputRef.value,
      showMeridian: false,
      maxHours: 24,
      minuteStep: minStep,
      snapToStep: true,
    });
  }

  render() {
    const { defaultStartTime } = this.props;
    return (
      <div className="input-group default-start bootstrap-timepicker timepicker">
        <input
          type="text"
          ref={this.inputRef}
          name="default_start"
          value={minToHour(defaultStartTime)}
          className="form-control input-small input-sm"
        />
        <span className="input-group-addon">
          <i className="fa fa-clock-o" />
        </span>
      </div>
    );
  }
}

DefaultTimeInput.propTypes = {
  defaultStartTime: PropTypes.number,
  minStep: PropTypes.number,
};

DefaultTimeInput.defaultProps = {
  defaultStartTime: '08:00',
  minStep: 5,
};

export default DefaultTimeInput;
