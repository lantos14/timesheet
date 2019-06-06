import { number, string, bool } from 'prop-types';

const TableRowTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  id: number.isRequired,
  day: string.isRequired,
  dayName: string.isRequired,
  defaultDateTitle: string.isRequired,
  defaultStart: number.isRequired,
  defaultEnd: number.isRequired,
  minWork: number.isRequired,
  workStart: number.isRequired,
  workEnd: number.isRequired,
  currentDay: bool.isRequired,
  dayOff: bool.isRequired,
  deviationType: number.isRequired,
  selectedTimeIsPassed: bool.isRequired,
};

export default TableRowTypes;
