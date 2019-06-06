/* eslint-disable no-undef */
export default function userDataStatus(state = {
  fetchInProgress: false,
  fetchSuccess: false,
  fetchError: false,
  error: null,
}, action) {
  switch (action.type) {
  case 'SET_USERDATA_REQUESTED':
    return {
      ...state,
      fetchInProgress: true,
      fetchSuccess: false,
    };
  case 'SET_USERDATA_SUCCEEDED':
    alfi_alert('Feltöltés sikeres', '', 'success');
    return {
      ...state,
      fetchSuccess: true,
      fetchInProgress: false,
      fetchError: false,
    };
  case 'SET_USERDATA_FAILED':
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
