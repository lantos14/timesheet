// Core dependencies
/* eslint-disable no-shadow */
/** @jsx jsx */
import { Component } from 'react';
import { jsx } from '@emotion/core';
import { connect } from 'react-redux';

// Redux
import { mapDispatchToProps, mapStateToProps } from './redux';

// Prop Types
import CalendarTypes from './Calendar.types';

// Style
import style from './style';

// Components
import YearSelector from './components/YearSelector/YearSelector';
import MonthSelector from './components/MonthSelector/MonthSelector';
import PrintSheet from './components/PrintSheet/PrintSheet';

/**
 * Calendar is responsible to list the available years, months,
 * and handle the user's choice, when one of them is selected.
 *
 * <ul>**Children**:
 *  <li> `YearSelector`
 *  <li> `MonthSelector`
 *  <li> `PrintSheet`
 * </ul>
 *
 * @reactProps {function} fetchAllData - this will initiate the ALL_DATA_REQUESTED redux action
 * @reactProps {function} yearSelected - this will initiate the YEAR_SELECT_REQUESTED redux action
 * @reactProps {function} monthSelected - this will initiate the MONTH_SELECT_REQUESTED redux action
 * @reactProps {number} selectedYear - loads through redux state.
 * Initially it will be the actual year but it can be modified by clicking on the corresponding year
 * @reactProps {number} selectedMonth - loads through redux state.
 * Initially it will be the actual month
 * but it can be modified by clicking on the corresponding month
 * @reactProps {number[]} yearList - static array
 * which contains the year before the actual year,
 * the actual year, and the year after it
 * @reactProps {string[]} monthList - static array
 * which contains the actual months of the local year
 */
class Calendar extends Component {
  /**
   * local state of the component
   * @type {object}
   */
  state = {
    selectedYear: 0,
    selectedMonth: 0,
  };

  /**
   * on mount, it will save the selectedYear, and selectedMonth from props to the local state
   */
  componentDidMount() {
    const { selectedYear, selectedMonth } = this.props;
    this.setState({ selectedYear, selectedMonth });
  }

  /**
   * It handles the clicks on the year and month selectors
   * @param {number} index - accepts the selected year's or month's index from the click event
   * and set it to the state
   * @param {string} type - give information about whether the index
   * came from the YearSelector or from the MonthSelector
   * @return {undefined} - it updates the local state directly, and sends out actions.
   * No need for return value
   */
  handleClick = async (index, type) => {
    const {
      fetchAllData,
      yearSelected,
      monthSelected,
    } = this.props;

    if (type === 'year') {
      yearSelected(index);
      await this.setState({ selectedYear: index });
    }
    if (type === 'month') {
      monthSelected(index);
      await this.setState({ selectedMonth: index });
    }

    const { selectedYear, selectedMonth } = this.state;
    fetchAllData(parseInt(selectedYear, 10), parseInt(selectedMonth, 10));
  }

  /**
   * @return HTML code in jsx format
   */
  render() {
    const {
      selectedYear,
      selectedMonth,
      yearList,
      monthList,
    } = this.props;

    return (
      <div className="calendar" css={style.calendar}>
        <i className="fa fa-calendar-check-o" css={style.faCalendar} />

        <YearSelector
          selectedYear={selectedYear}
          yearList={yearList}
          handleClick={this.handleClick}
        />

        <MonthSelector
          selectedYear={selectedYear}
          selectedMonth={selectedMonth}
          monthList={monthList}
          handleClick={this.handleClick}
        />

        <PrintSheet
          selectedYear={selectedYear}
          actualMonth={selectedMonth}
        />

      </div>
    );
  }
}

Calendar.propTypes = CalendarTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calendar);
