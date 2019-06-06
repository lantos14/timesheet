import fetchStatus from './fetchStatus';
import { fetchAllData } from '../actions/actions';

describe('fetchStatus reducer', () => {
  test('returns default state, when no action is provided', () => {
    const defaultState = fetchStatus();
    expect(defaultState.fetchSuccess).toBe(false);
  });
  test('returns fetchInProgress state key true, if ALL_DATA_REQUESTED action is provided', () => {
    const state = fetchStatus(undefined, fetchAllData(2019, 1));
    console.log('state: ', state);
    expect(state.fetchInProgress).toBe(true);
  });
});
