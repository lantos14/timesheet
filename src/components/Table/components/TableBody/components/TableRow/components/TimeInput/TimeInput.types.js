import { number, string, bool } from 'prop-types';

const TimeInputTypes = {
  id: number.isRequired,
  day: string.isRequired,
  type: string.isRequired,
  startTime: string,
  step: number,
  defaultStartTime: number.isRequired,
  selectedTimeIsPassed: bool.isRequired,
};

export default TimeInputTypes;
