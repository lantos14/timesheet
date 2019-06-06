import { number, func, bool } from 'prop-types';

const PlanDifferenceInputTypes = {
  id: number.isRequired,
  updateRowDeviationType: func.isRequired,
  selectedTimeIsPassed: bool.isRequired,
};

export default PlanDifferenceInputTypes;
