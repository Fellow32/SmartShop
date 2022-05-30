import { call, put, takeEvery } from "redux-saga/effects";
import { getItems } from "./newItemsReducer";

function* getNewItemsWorker() {
  const data = yield call(() =>
    fetch(
      "https://6294732ca7203b3ed06939e5.mockapi.io/newItems?page=1&limit=4"
    )
  );
 
  const json = yield data.json();
  yield put(getItems(json));
}

function* newItemsSaga() {
  yield takeEvery("new_items/getNewItemsFetch", getNewItemsWorker);
}

export default newItemsSaga;
