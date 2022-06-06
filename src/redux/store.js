import { configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import newItemsReducer from "./reducers/newItemsReducer/newItemsReducer";
import {rootWatcher} from "../redux/reducers/index"
import topSalesItemsReducer from "./reducers/topSalesReducer/topSalesItemsReducer";
import cartItemsReducer from "./reducers/cartItemsReducer/cartItemsReducer";


const sagaMiddleware = createSagaMiddleware()



export const store = configureStore({
    reducer :{
        newItems:newItemsReducer,
        topSalesItems:topSalesItemsReducer,
        cartItems:cartItemsReducer,
        
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware]
    
})

sagaMiddleware.run(rootWatcher);





