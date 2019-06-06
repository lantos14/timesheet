/* eslint-disable no-nested-ternary */
// Core dependencies
/** @jsx jsx */
import { jsx } from '@emotion/core';
// eslint-disable-next-line no-unused-vars
import { memo } from 'react';

// Child components
import DateField from './components/DateField/DateField';
import PlannedWorkTimeField from './components/PlannedWorkTimeField/PlannedWorkTimeField';
import HoursWorked from './components/HoursWorked/HoursWorked';
import PlanDifferenceInput from './components/PlanDifferenceInput/PlanDifferenceInput';

// Input
import TimeInput from './components/TimeInput/TimeInput';

// PropTypes
import TableRowTypes from './TableRow.types';

// Global utils
import { getPlannedWorkTitle } from '../../../../../../utils/utils';

// Style
import style from './style';

const TableRow = ({
  id,
  day,
  dayName,
  minWork,
  workStart,
  workEnd,
  currentDay,
  dayOff,

  defaultDateTitle,
  defaultStart,
  defaultEnd,
  deviationType,

  selectedTimeIsPassed,
}) => (
  <tr css={style.row}>
    <DateField
      day={day}
      dayName={dayName}
      currentDay={currentDay}
    />

    <PlannedWorkTimeField
      workTitle={getPlannedWorkTitle(
        defaultDateTitle,
        defaultStart,
        defaultEnd,
      )}
    />

    <td align="center" width="10%">
      {minWork !== null && dayOff === false && deviationType !== 2 && (
        <TimeInput
          {...{
            type: 'workStart',
            id,
            day,
            startTime: workStart,
            defaultStartTime: defaultStart,
            step: 5,
            selectedTimeIsPassed,
          }}
        />
      )}
    </td>
    <td align="center" width="10%">
      {minWork !== null && dayOff === false && deviationType !== 2 && (
        <TimeInput
          {...{
            type: 'workEnd',
            id,
            day,
            startTime: workEnd,
            defaultStartTime: defaultEnd,
            step: 5,
            selectedTimeIsPassed,
          }}
        />
      )}
    </td>
    <td align="center" width="4%">
      {minWork !== null && dayOff === false && deviationType !== 2 && (
        <HoursWorked
          workTime={workEnd - workStart}
          minWork={minWork}
        />
      )}
    </td>
    <td align="center" width="15%">
      {minWork !== null && dayOff === false ? (
        <PlanDifferenceInput
          id={id}
          deviationType={deviationType}
          selectedTimeIsPassed={selectedTimeIsPassed}
        />
      )
        : dayOff
          ? (
            <span>
              <i className="fa fa-sun-o" style={{ color: '#F29C2D' }} ariaHidden="true" />
            &nbsp;
            Szabadság
            </span>
          )
          : null
      }
    </td>
  </tr>
);

TableRow.propTypes = TableRowTypes;

export default memo(TableRow);
