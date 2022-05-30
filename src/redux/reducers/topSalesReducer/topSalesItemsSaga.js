import {call,put,takeEvery} from "redux-saga/effects"
import { getItems } from "./topSalesItemsReducer"


function* getTopSalesItemsWorker () {

    const data = yield call (() => 
        fetch (
            "https://6294732ca7203b3ed06939e5.mockapi.io/top_sales?page=1&limit=4"
        )
    )

    const json = yield data.json()
    yield put(getItems(json))

}



function* getTopSalesItemsWatcher() {
    yield takeEvery('top_sales_items/getTopSalesItemsFetch', getTopSalesItemsWorker)

}

export default getTopSalesItemsWatcher