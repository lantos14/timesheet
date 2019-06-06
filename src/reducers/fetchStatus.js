export default function fetchStatus(state = {
  firstLoad: true,
  fetchInProgress: false,
  fetchSuccess: false,
  fetchError: false,
  error: null,
}, action) {
  if (!action) { return state; }

  switch (action.type) {
  case 'ALL_DATA_REQUESTED':
    return {
      ...state,
      fetchInProgress: true,
      fetchSuccess: false,
    };
  case 'ALL_DATA_FAILED':
    return {
      ...state,
      fetchInProgress: false,
      fetchError: true,
      error: action.payload,
    };
  case 'ALL_DATA_SUCCEEDED':
    return {
      ...state,
      fetchSuccess: true,
      firstLoad: false,
      fetchInProgress: false,
      fetchError: false,
    };
  default:
    return state;
  }
}
