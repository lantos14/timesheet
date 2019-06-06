import {
  number,
  string,
  func,
  arrayOf,
} from 'prop-types';

const MonthSelectorTypes = {
  selectedYear: number.isRequired,
  actualMonth: number.isRequired,
  monthList: arrayOf(string),
  handleClick: func.isRequired,
};

export default MonthSelectorTypes;
