import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//GET all CL data
function* getDataCL(action) {
  try {
    const response = yield axios({
      method: 'GET',
      url: '/CL/data'
    });
    // console.log(response.data);
    yield put({
      type: 'SET_CL_DATA',
      payload: response.data
    });
  } catch (err) {
    console.log('error fetching all new orders: ', err);
  }
}

//GET all CL data
function* getDataFB(action) {
  try {
    const response = yield axios({
      method: 'GET',
      url: '/FB/data'
    });
    // console.log(response.data);
    yield put({
      type: 'SET_FB_DATA',
      payload: response.data
    });
  } catch (err) {
    console.log('error fetching all new orders: ', err);
  }
}

// ONLY FOR REGISTRATION
function* getDataSaga() {
  yield takeLatest('GET_CL_DATA', getDataCL);
  yield takeLatest('GET_FB_DATA', getDataFB);
}

export default getDataSaga;
