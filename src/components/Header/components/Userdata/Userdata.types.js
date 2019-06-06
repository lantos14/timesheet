import { bool } from 'prop-types';
import DisplayTableType from './components/DisplayTable/DisplayTable.types';

const UserdataType = {
  selectedTimeIsPassed: bool.isRequired,
  ...DisplayTableType,
};

export default UserdataType;
