import { bool, func } from 'prop-types';

const AppTypes = {
  firstLoad: bool.isRequired,
  fetchInProgress: bool.isRequired,
  fetchAllData: func.isRequired,
};

export default AppTypes;
