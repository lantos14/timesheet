export default function staticStore(state = {
  officeList: [],
}, action) {
  switch (action.type) {
  case 'STATIC_DATA_SUCCEEDED':
    return {
      ...state,
      officeList: action.payload,
    };
  default:
    return state;
  }
}
