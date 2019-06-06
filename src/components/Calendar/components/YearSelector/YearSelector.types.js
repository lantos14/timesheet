import { number, arrayOf, func } from 'prop-types';

const YearSelectorTypes = {
  selectedYear: number.isRequired,
  yearList: arrayOf(number),
  handleClick: func.isRequired,
};

export default YearSelectorTypes;
