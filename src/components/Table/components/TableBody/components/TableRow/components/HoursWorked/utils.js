import { minToHour } from '../../../../../../../../utils/utils';

export const decideColor = (minWork, worked) => {
  const workDifference = worked - minWork;
  let result = '';

  if (workDifference === 0) {
    result = 'black';
  }
  if (workDifference < 0) {
    result = 'red';
  }
  if (workDifference > 0) {
    result = 'green';
  }
  return result;
};

export const getWorkTime = (minWork, worked) => {
  const workDifference = worked - minWork;
  let result = '';

  if (workDifference === 0) {
    result = `${minToHour(worked)}`;
  }

  if (workDifference < 0) {
    result = `${minToHour(worked)}(-${minToHour(workDifference)})`;
  }

  if (workDifference > 0) {
    result = `${minToHour(worked)}(${minToHour(workDifference)})`;
  }

  return result;
};
