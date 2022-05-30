import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items : [],
    isLoading :false
}


export const topSalesItemsReducer = createSlice({
   name:"top_sales_items",
   initialState,
   reducers:{
    getTopSalesItemsFetch: (state) => {
        state.isLoading = true;
      },
   getItems: (state,action) => {
       state.items = action.payload
   }

   }




})

export const {getTopSalesItemsFetch,getItems} = topSalesItemsReducer.actions


export default topSalesItemsReducer.reducer