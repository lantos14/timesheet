const officeListTransform = (input) => {
  const target = input;
  let result;
  if (Array.isArray(target)) {
    for (let i = 0; i < target.length; i += 1) {
      result[target[i].short] = target[i].value;
    }
  } else if (target instanceof Object) {
    result = Object.entries(target).map(([key, value]) => ({ short: key, fullname: value }));
  } else {
    throw new Error('officeListTransfrom: wrong input');
  }
  // eslint-disable-next-line no-param-reassign
  return result;
};

export default officeListTransform;
