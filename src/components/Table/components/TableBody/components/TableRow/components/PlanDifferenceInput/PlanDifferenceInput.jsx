// Core dependencies
/** @jsx jsx */
import { jsx } from '@emotion/core';
// eslint-disable-next-line no-unused-vars
import { Component } from 'react';
import { connect } from 'react-redux';

// PropTypes
import PlanDifferenceInputTypes from './PlanDifferenceInput.types';

// Redux
import { mapDispatchToProps } from './redux';

class PlanDifferenceInput extends Component {
  handleChange = this.handleChange.bind(this);

  handleChange(event) {
    const { target: { selectedIndex } } = event;
    const { id, updateRowDeviationType } = this.props;

    updateRowDeviationType({
      id,
      deviationType: selectedIndex - 1,
    });
  }

  render() {
    const {
      deviationType,
      selectedTimeIsPassed,
    } = this.props;
    return (
      <select
        onChange={this.handleChange}
        className="form-control form-control-sm"
        disabled={selectedTimeIsPassed}
      >
        <option selected={deviationType === -1}>-</option>
        <option selected={deviationType === 0}>Belföldi kiküldetés</option>
        <option selected={deviationType === 1}>Külföldi kiküldetés</option>
        <option selected={deviationType === 2}>Táppénz</option>
      </select>
    );
  }
}

PlanDifferenceInput.propTypes = PlanDifferenceInputTypes;

export default connect(
  null,
  mapDispatchToProps,
)(PlanDifferenceInput);
