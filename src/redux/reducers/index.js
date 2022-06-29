import {all} from "redux-saga/effects";
import getTopSalesItemsWatcher from "./topSalesReducer/topSalesItemsSaga";
import newItemsSaga from "./newItemsReducer/newItemsSaga";
import cartItemsWatcher from "./cartItemsReducer/cartItemsSaga";
import { postItemInCartWatcher } from "./cartItemsReducer/cartItemsSaga";
import getHoverboardsItemsWatcher from "./hoverboardsReducer/hoverboardsSaga";


export function* rootWatcher () {
    yield all ([getTopSalesItemsWatcher(),newItemsSaga(),cartItemsWatcher(),getHoverboardsItemsWatcher()])
}