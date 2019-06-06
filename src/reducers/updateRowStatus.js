/* eslint-disable no-undef */
export default function updateRowStatus(state = {
  fetchInProgress: false,
  fetchSuccess: false,
  fetchError: false,
  error: null,
}, action) {
  switch (action.type) {
  case 'UPDATE_ROW_TIME_REQUESTED':
    return {
      ...state,
      fetchInProgress: true,
      fetchSuccess: false,
    };
  case 'UPDATE_ROW_TIME_SUCCEEDED':
    return {
      ...state,
      fetchSuccess: true,
      fetchInProgress: false,
      fetchError: false,
    };
  case 'UPDATE_ROW_TIME_FAILED':
    alfi_alert('Feltöltés sikertelen', '', 'error');
    return {
      ...state,
      fetchSuccess: false,
      fetchInProgress: false,
      fetchError: true,
      error: action.payload.error,
    };
  default:
    return state;
  }
}
