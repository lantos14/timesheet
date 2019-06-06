/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line consistent-return
export const decideDeviationColor = (deviationTime) => {
  const sign = Math.sign(deviationTime);

  if (sign === 0) {
    return 'unset';
  }

  if (sign === 1) {
    return 'green';
  }

  if (sign === -1) {
    return 'red';
  }
};
