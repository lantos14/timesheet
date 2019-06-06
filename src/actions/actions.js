/**
 * Redux actions are responsible for omiting a certain kind of action
 *  (which is an object with an acton type and payload).
 * The saga and the reducers can listen to these events and perform
 * an action set by the developer (storing, modifying values, performing functions...)
 */

/**
 * Omits the 'ALL_DATA_REQUESTED' action with the given year and month parameter
 * @param {number} year - the year what was extracted from a user action.
 * If undefined, then the actual year, or month will be applied to the saga.
 * @param {number} month - the month what was extracted from a user action.
 * If undefined, then the actual year, or month will be applied to the saga.
 * @returns {object} - with an action type and poosibly a payload.
 */
export function fetchAllData(year, month) {
  return {
    type: 'ALL_DATA_REQUESTED',
    payload: { year, month },
  };
}
/**
 * Omits the 'SET_USERDATA_REQUESTED' action with the given office and startTime parameter
 * @param {string} office - The shorthand of the office, what needs to be changed
 * @param {number} startTime - the new default start time, which was provided by the user
 * @returns {object} - with an action type and poosibly a payload.
 */
export function setUserData(office, startTime) {
  return {
    type: 'SET_USERDATA_REQUESTED',
    payload: { office, startTime },
  };
}
/**
 * Omits the 'UPDATE_ROW_TIME_REQUESTED' action with the given payload
 * This action will fire when the user modifies the day row's workstart or workend time.
 * @param {object} payload - the data needed for updating the row
 * @param {string} payload.type - type of the updated time, enum: 'workStart', 'workEnd'
 * @param {number} payload.id - the row's id, possibly the number of th given day
 * @param {day} payload.day - the day's date in YYYY.MM.DD format
 * @param {number} payload.minute - the new time in minutes
 * @returns {object} - with an action type and poosibly a payload.
 */
export function updateRowTime(payload) {
  return {
    type: 'UPDATE_ROW_TIME_REQUESTED',
    payload,
  };
}
/**
 * Omits the 'UPDATE_ROW_DEVIATION_TYPE_REQUESTED' action with the given payload.
 * This action will fire when the user modifies the day row's deviation column
 *  (dayoff, sick leave etc.)
 * @param {object} payload - the data needed for updating the actual year
 * @param {number} payload.id - the day's serial number
 * @param {number} payload.deviationType - the type of deviation (sick leave, dayOff etc.)
 * @returns {object} - with an action type and poosibly a payload.
 */
export const updateRowDeviationType = payload => ({
  type: 'UPDATE_ROW_DEVIATION_TYPE_REQUESTED',
  payload,
});
/**
 * Omits the 'UPDATE_USER_STATISTIC_REQUESTED' action with the given payload.
 * This action will fire when the user modifies the day row's workstart or workend time.
 * @param {object} payload - the data needed for updating the actual year
 * @param {number} payload.stepDifference - the amount of time we have to add or substract
 * from the sum of worked hours, deviationTime and summary
 * @returns {object} - with an action type and poosibly a payload.
 */
export function updateUserStatistic(payload) {
  return {
    type: 'UPDATE_USER_STATISTIC_REQUESTED',
    payload,
  };
}
// Calendar events
/**
 * Omits the 'YEAR_SELECT_REQUESTED' action with the given payload
 * @param {object} payload - the data needed for updating the actual year
 * @param {number} payload.year - if the user clicked to another year button,
 * then this action will send the new year forward to the saga, and reducer
 * @returns {object} - with an action type and poosibly a payload.
 */
export function yearSelected(payload) {
  return {
    type: 'YEAR_SELECT_REQUESTED',
    payload,
  };
}
/**
 * Omits the 'MONTH_SELECT_REQUESTED' action with the given payload
 * @param {object} payload - the data needed for updating the actual month
 * @param {number} payload.month - if the user clicked to another month button,
 * then this action will send the new year forward to the saga, and reducer
 * @returns {object} - with an action type and poosibly a payload.
 */
export function monthSelected(payload) {
  return {
    type: 'MONTH_SELECT_REQUESTED',
    payload,
  };
}

export function resetToDefaultTime() {
  return {
    type: 'RESET_TO_DEFAULT_TIME_REQUESTED',
  };
}
