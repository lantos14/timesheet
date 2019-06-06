import 'regenerator-runtime/runtime';
import {
  takeEvery, put, call, delay, select,
} from 'redux-saga/effects';
import { getData, postData } from '../services/api';
import { minToHour, stringToPhpTimeStamp, getDeviationTitle } from '../utils/utils';

const baseUrl = process.env.URL;

function* getAllData(action) {
  const { year, month } = action.payload;
  let url = `${baseUrl}/fetch`;

  if (year && typeof month === 'number') {
    url = `${baseUrl}/fetch/${year}/${month + 1}`;
  }

  try {
    yield delay(100);
    const data = yield call(getData, url);

    yield put({
      type: 'ALL_DATA_SUCCEEDED',
    });

    yield put({
      type: 'STATIC_DATA_SUCCEEDED',
      payload: data.timesheetData.officeList,
    });

    yield put({
      type: 'USER_DATA_SUCCEEDED',
      payload: data.userData,
    });

    yield put({
      type: 'TIMESHEET_DATA_SUCCEEDED',
      payload: data.timesheetData,
    });
  } catch (error) {
    yield put({
      type: 'ALL_DATA_FAILED',
      payload: error,
    });
    console.log(error); //eslint-disable-line
  }
}

function* postUserData(action) {
  const url = `${baseUrl}/saveTimesheet`;
  try {
    yield delay(100);
    const { office, startTime } = action.payload;
    const postBody = {
      office,
      default_start: minToHour(startTime),
    };

    postData(url, postBody);

    yield put({
      type: 'SET_USERDATA_SUCCEEDED',
      payload: { office, startTime },
    });

    yield put({
      type: 'ALL_DATA_REQUESTED',
      payload: {},
    });
  } catch (error) {
    yield put({
      type: 'SET_USERDATA_FAILED',
      payload: error,
    });
  }
}

function* updateRowTime(action) {
  console.log(action.payload);

  try {
    const url = `${baseUrl}/ontime`;
    const { type, day, minute } = action.payload;
    const minuteType = type === 'workStart' ? 'start' : 'end';
    // we need to modify the data to match the endpoint criteria
    const postBody = {
      time: minuteType,
      data: {
        day: stringToPhpTimeStamp(day),
      },
    };

    if (minuteType === 'start') {
      postBody.data.time_start = minToHour(minute);
    } else {
      postBody.data.time_end = minToHour(minute);
    }

    yield delay(100);

    postData(url, postBody);

    yield put({
      type: 'UPDATE_ROW_TIME_SUCCEEDED',
      payload: action.payload,
    });
  } catch (error) {
    yield put({
      type: 'UPDATE_ROW_TIME_FAILED',
      payload: error,
    });
  }
}

function* updateUserStatistic(action) {
  try {
    // console.log('REQUEST_API_TO_UPDATE_USER_STATISTIC');
    yield put({
      type: 'UPDATE_USER_STATISTIC',
      payload: action.payload,
    });
  } catch (error) {
    console.log(error); //eslint-disable-line
  }
}

function* updateRowDeviationType(action) {
  try {
    const { id, deviationType } = action.payload;
    const { timesheetStore: { monthDays } } = yield select();
    const url = `${baseUrl}/onholiday`;
    let postBody;

    if (deviationType === -1) {
      postBody = {
        day: monthDays[id].date,
        value: '',
        state: false,
        deleteTime: true,
      };
    } else {
      postBody = {
        day: monthDays[id].date,
        value: getDeviationTitle(deviationType),
        state: true,
        deleteTime: false,
      };
    }
    postData(url, postBody);
    // console.log('REQUEST_API_TO_UPDATE_ROW_DEVIATION_TYPE');
    yield put({
      type: 'UPDATE_ROW_DEVIATION_TYPE',
      payload: action.payload,
    });

    if (deviationType !== 2) {
      yield put({
        type: 'RESET_TO_DEFAULT_TIME_REQUESTED',
        payload: { id },
      });
    }

    yield put({
      type: 'UPDATE_ROW_TIME_REQUESTED',
      payload: {
        type: 'workStart',
        day: monthDays[id].date,
        minute: monthDays[id].defaultStart,
      },
    });

    yield put({
      type: 'UPDATE_ROW_TIME_REQUESTED',
      payload: {
        type: 'workEnd',
        day: monthDays[id].date,
        minute: monthDays[id].defaultEnd,
      },
    });

  } catch (error) {
    console.log(error); //eslint-disable-line
  }
}

export default function* rootSaga() {
  yield takeEvery('ALL_DATA_REQUESTED', getAllData);
  yield takeEvery('SET_USERDATA_REQUESTED', postUserData);
  yield takeEvery('UPDATE_USER_STATISTIC_REQUESTED', updateUserStatistic);
  // Row data
  yield takeEvery('UPDATE_ROW_TIME_REQUESTED', updateRowTime);
  yield takeEvery('UPDATE_ROW_DEVIATION_TYPE_REQUESTED', updateRowDeviationType);
}
