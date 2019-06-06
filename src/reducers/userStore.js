export default function userStore(state = {
  fullname: '',
  taxnumber: 'nincs megadva',
  office: null,
}, action) {
  switch (action.type) {
  case 'USER_DATA_SUCCEEDED':
    return {
      ...state,
      fullname: action.payload.fullname,
      taxnumber: action.payload.taxnumber,
      office: action.payload.office,
    };
  case 'SET_USERDATA_SUCCEEDED':
    return {
      ...state,
      office: action.payload.office,
    };
  default:
    return state;
  }
}
