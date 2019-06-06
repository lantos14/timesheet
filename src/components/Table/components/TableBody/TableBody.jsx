// Core dependencies
import React, { memo } from 'react';
import { connect } from 'react-redux';

// Redux
import { mapStateToProps } from './redux';

// PropTypes
import TableBodyTypes from './TableBody.types';

// Components
import TableRow from './components/TableRow/TableRow';

// Local utils
import { getDayName } from './utils';

// Global utils
import { dateToString } from '../../../../utils/utils';


const TableBody = ({ tableData, selectedTimeIsPassed }) => (
  <tbody>
    {tableData.map(
      (
        {
          date,
          worktime,
          minWork,
          workStart,
          workEnd,
          currentDay,
          defaultDateTitle,
          defaultStart,
          defaultEnd,
          dayOff,
          deviationType,
        },
        index,
      ) => (
        <TableRow
          id={index}
          day={dateToString(date)}
          dayName={getDayName(date)}
          worktime={worktime}
          minWork={minWork}
          workStart={workStart}
          workEnd={workEnd}
          currentDay={currentDay}
          defaultDateTitle={defaultDateTitle}
          defaultStart={defaultStart}
          defaultEnd={defaultEnd}
          dayOff={dayOff}
          deviationType={deviationType}
          selectedTimeIsPassed={selectedTimeIsPassed}
        />
      ),
    )}
  </tbody>
);

TableBody.propTypes = TableBodyTypes;

export default connect(
  mapStateToProps,
  null,
)(memo(TableBody));
