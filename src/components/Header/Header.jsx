/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-named-as-default */
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Userdata from './components/Userdata/Userdata';
import Clock from './components/Clock/Clock';
import Summary from './components/Summary/Summary';
import UserdataModalWindow from './components/UserdataModalWindow/UserdataModalWindow';
import { setUserData } from '../../actions/actions';
import UserdataType from './components/Userdata/Userdata.types';
import Summarytypes from './components/Summary/Summary.types';
import { stringClockToMin } from '../../utils/utils';

/**
 * The Header is responsible for rendering the user's personal information on the page.
 * @reactProps {object[]} officeList - redux store property.
 * It contains the list of available office departments and the shorthands for them
 * @reactProps {function} - setuserData - initiate SET_USERDATA_REQUESTED action
 * @reactProps {object} - UserDataTypes - available in the `Userdata.types`
 * @reactProps {object} - Summarytypes - available in the `Summarytypes.types`
 */
export class Header extends Component {
  /**
   * The function will search through the officeList with the given key
   * @param {string} officeCode - the shorthand of the office, ex.: 'VH'
   * @param {object[]} officeList - contains the available offices and their shorthands
   * @returns {string} - iit search through the list based on the provided officeCode
   * and returns the string of the office on the given key
   */
  pickOfficeString = (officeCode, officeList) => {
    if (officeCode === 'nincs megadva') {
      return 'nincs megadva';
    }

    return officeList[officeCode];
  };

  /**
   * the function turns the officeList from an object to an array
   * @param {object} officeList - an object with the office shorthand key name
   * and the value is the long string of the office department
   * @returns {array[]} a 2 dimensional array processed with `Object.entries`
   */
  formatOfficeList = (officeList) => {
    const officeArray = Object.entries(officeList);
    return officeArray;
  };

  /**
   * the function gathers the values from the modal inputs
   * and send it with the setUserData redux action
   * @returns {undefined}
   */
  modalEvent = () => {
    const modalOfficeInput = document
      .querySelector('#set-office-input')
      .value
      .split(':')[0];
    const modalTimeStartInput = document.querySelector(
      '#default-time-input-container input',
    ).value;
    // eslint-disable-next-line react/destructuring-assignment
    this.props.setUserData(
      modalOfficeInput,
      stringClockToMin(modalTimeStartInput),
    );
  };

  render() {
    const {
      // Userdata props
      fullname,
      taxNumber,
      office,
      defaultStartTime,
      firstDay,
      lastDay,
      selectedTimeIsPassed,
      // Modal props
      officeList,
      // Summary props
      basePlannedTime,
      workedTime,
      dayOffTime,
      deviationTime,
    } = this.props;

    const formattedOfficeList = this.formatOfficeList(officeList);

    return (
      <div data-test="component-header" className="box box-widget widget-user">
        <Userdata
          fullname={fullname}
          taxNumber={taxNumber}
          office={this.pickOfficeString(office, officeList)}
          defaultStartTime={defaultStartTime}
          firstDay={firstDay}
          lastDay={lastDay}
          selectedTimeIsPassed={selectedTimeIsPassed}
        />

        <Clock selectedTimeIsPassed={selectedTimeIsPassed} />
        <UserdataModalWindow
          office={office}
          officeList={formattedOfficeList}
          setUserData={this.modalEvent}
          defaultStartTime={defaultStartTime}
        />
        <Summary
          basePlannedTime={basePlannedTime}
          workedTime={workedTime}
          dayOffTime={dayOffTime}
          deviationTime={deviationTime}
        />
      </div>
    );
  }
}

Header.propTypes = {
  ...UserdataType,
  officeList: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  ...Summarytypes,
  setUserData: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  // Userdata props
  fullname: store.userStore.fullname,
  taxNumber: store.userStore.taxnumber,
  office: store.userStore.office,
  defaultStartTime: store.timesheetStore.defaultStartTime,
  selectedTimeIsPassed: store.calendarStore.selectedTimeIsPassed,
  // Modal props
  officeList: store.staticStore.officeList,
  // Summary props
  basePlannedTime: store.timesheetStore.basePlannedTime,
  workedTime: store.timesheetStore.workedTime,
  dayOffTime: store.timesheetStore.dayOffTime,
  paidHours: store.timesheetStore.paidHours,
  deviationTime: store.timesheetStore.deviationTime,
  firstDay: store.timesheetStore.firstDay,
  lastDay: store.timesheetStore.lastDay,
});

const mapDispatchToProps = {
  setUserData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
