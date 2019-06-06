import { fetchAllData } from './actions';

describe('fetchAllData', () => {
  test('returns an action with type ALL_DATA_REQUESTED', () => {
    const year = 2019;
    const month = 1;
    const action = fetchAllData(year, month);
    expect(action).toEqual({
      type: 'ALL_DATA_REQUESTED',
      payload: { year, month },
    });
  });
});
