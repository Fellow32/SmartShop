import { call, put, takeEvery} from 'redux-saga/effects'
import { getItems } from './itemsReducer'


function* getItemsWorker () {
    const data = yield call(() => fetch('https://62736c976b04786a0905ce2a.mockapi.io/hoverboards?page=1&limit=4'))
    const json = yield data.json()
    yield put(getItems(json))
}



function* itemsSaga () {
    yield takeEvery('items/getItemsFetch', getItemsWorker)
}


export default itemsSaga