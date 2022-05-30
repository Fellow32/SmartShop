import { configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import newItemsReducer from "./reducers/newItemsReducer/newItemsReducer";
import {rootWatcher} from "../redux/reducers/index"

import topSalesItemsReducer from "./reducers/topSalesReducer/topSalesItemsReducer";


const sagaMiddleware = createSagaMiddleware()

export const  store = configureStore({
    reducer :{
        newItems:newItemsReducer,
        topSalesItems:topSalesItemsReducer
    },
    middleware: [sagaMiddleware]
});
sagaMiddleware.run(rootWatcher);





