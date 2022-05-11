import { configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import itemsReducer from './reducers/itemsReducer'
import itemsSaga from "./reducers/itemsSaga";

const sagaMiddleware = createSagaMiddleware()

export const  store = configureStore({
    reducer :{
        items:itemsReducer
    },
    middleware: [sagaMiddleware]
});
sagaMiddleware.run(itemsSaga);





