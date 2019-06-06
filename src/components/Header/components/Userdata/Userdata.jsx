/* eslint-disable import/no-named-as-default */
// Core dependencies
/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React, { memo } from 'react';
import { jsx } from '@emotion/core';

// PropTypes
import UserdataType from './Userdata.types';

// Style & styled
import { StyledUserdata } from './style';

// Child Components
import DisplayTable from './components/DisplayTable/DisplayTable';
import EditButton from './components/EditButton/EditButton';

/**
 * Contains the DisplayTable and EditButton components
 * @reactProps {string} fullname - user's name
 * @reactProps {string} office - the user's selected office
 * @reactProps {number} defaultStartTime - The user's preferred
 * default working start time in minutes
 * @reactProps {string} firstDay - the first day of the selected period
 * @reactProps {string} lastDay - the last day of the selected period
 * @reactProps {string} lastDay - the last day of the selected period
 * @reactProps {boolean} selectedTimeIsPassed - a very handy boolean which is stored in the reducer
 * It tells you that whether the selected time (year and month included) is in the past or not.
 * It is useful for applying the grey color, the lock on the month buttons, clock component etc.
 */
export const Userdata = (
  {
    fullname,
    office,
    defaultStartTime,
    firstDay,
    lastDay,
    selectedTimeIsPassed,
  },
) => (
  <StyledUserdata
    className="userdata widget-user-header"
    selectedTimeIsPassed={selectedTimeIsPassed}
  >

    <DisplayTable
      fullname={fullname}
      defaultStartTime={defaultStartTime}
      firstDay={firstDay}
      lastDay={lastDay}
      office={office}
    />

    <EditButton selectedTimeIsPassed={selectedTimeIsPassed} />

  </StyledUserdata>
);

Userdata.propTypes = UserdataType;

Userdata.defaultProps = {
  office: null,
};

export default memo(Userdata);
