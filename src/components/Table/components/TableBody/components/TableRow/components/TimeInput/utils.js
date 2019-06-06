// eslint-disable-next-line import/prefer-default-export
export const minToHour = (number) => {
  if (number !== 0 && !number) {
    return '';
  }

  const formattedNumber = Math.abs(number);
  const hours = formattedNumber / 60;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes) < 10 ? `0${Math.round(minutes)}` : Math.round(minutes);
  return `${rhours}:${rminutes}`;
};
