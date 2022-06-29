import {call,put,takeEvery} from "redux-saga/effects"
import { getItems } from "./hoverboardsSlice"


function* getHoverboardsItemsWorker () {
            const data = yield call(() => 
                fetch('https://6294732ca7203b3ed06939e5.mockapi.io/hoverboards')
            )

            const json = yield data.json()
            yield put(getItems(json))
}





function* getHoverboardsItemsWatcher () {
    yield takeEvery("hoverboards_items/getItemsFetch", getHoverboardsItemsWorker)
}   


export default getHoverboardsItemsWatcher