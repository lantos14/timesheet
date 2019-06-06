import {
  string,
  arrayOf,
  func,
  number,
} from 'prop-types';

const UserModalWindowTypes = {
  office: string.isRequired,
  officeList: arrayOf(arrayOf(string)).isRequired,
  defaultStartTime: number.isRequired,
  setUserData: func.isRequired,
};

export default UserModalWindowTypes;
