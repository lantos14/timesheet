import { string, number } from 'prop-types';

const DisplayTableType = {
  fullname: string.isRequired,
  defaultStartTime: number.isRequired,
  firstDay: number.isRequired,
  lastDay: number.isRequired,
  office: string.isRequired,
};

export default DisplayTableType;
