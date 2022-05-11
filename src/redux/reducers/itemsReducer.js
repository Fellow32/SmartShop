import { createSlice } from "@reduxjs/toolkit"

 


const initialState = {
    items : [],
    isLoading : false
}


export const itemsReducer =  createSlice({
    name : 'items',
    initialState,
    reducers: {
         getItemsFetch : (state) => {
             state.isLoading = true
         },

        getItems : (state,action) => {
            state.items = action.payload
        },
        getItemsFailure: (state) => {
            state.isLoading = false
        },
    }
})





export const {getItemsFetch, getItems, getItemsFailure} = itemsReducer.actions


export default itemsReducer.reducer























