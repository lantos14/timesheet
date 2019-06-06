// eslint-disable-next-line import/prefer-default-export
export const calcPaidTime = (workedTime, deviationTime) => workedTime + deviationTime;

// eslint-disable-next-line consistent-return
export const decidePaidHoursColor = (workerHours, paidTime) => {
  if (paidTime === workerHours) {
    return 'unset';
  }

  if (paidTime < workerHours) {
    return 'red';
  }

  if (paidTime > workerHours) {
    return 'green';
  }
};
