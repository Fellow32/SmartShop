import {call,takeEvery,put} from "redux-saga/effects"
import { getItems } from "./cartItemsReducer"

function* getCartItemsWorker () {
     const data = yield call (() => 
         fetch ("https://6294732ca7203b3ed06939e5.mockapi.io/cart")
     )

     const json = yield data.json()
     yield put (getItems(json))
}



export function* cartItemsWatcher () {
     yield takeEvery ("cart_items/getCartItemsFetch", getCartItemsWorker)
}



// export function* postItemInCartWatcher () {
//      yield takeEvery("cart_items/addItemInCart", postItemInCartWorker)
// }


export default cartItemsWatcher
