import {all} from "redux-saga/effects";
import getTopSalesItemsWatcher from "./topSalesReducer/topSalesItemsSaga";
import newItemsSaga from "./newItemsReducer/newItemsSaga";


export function* rootWatcher () {
    yield all ([getTopSalesItemsWatcher(),newItemsSaga()])
}