import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const initialState ={
    items: [],
    isLoading: false,
    price:0,
    totalCount : 0
}












export const cartItemsReducer = createSlice({
    name:"cart_items",
    initialState,
    reducers: {
        getCartItemsFetch: (state) => {
            state.isLoading = true;
        },

        getItems : (state,action) => {
                state.items = action.payload
                state.price = state.items.reduce((sum,el) => {
                    return sum + el.currentPrice
                },500)
                state.totalCount = [].concat.apply([],Object.values(state.items)).length
                    
        },
        removeItem: (state,action) => {
            state.items = state.items.filter(el => el.id !== action.payload.id)
            
        }
       
        }

        
    }
)



export const addItemInCart = createAsyncThunk(
    'cart_items/addItemInCart',
    async function (obj,{dispatch}) {
   

      await fetch('https://6294732ca7203b3ed06939e5.mockapi.io/cart',{
             method:'POST',
             headers: {'Content-Type': 'application/json'},
             body:JSON.stringify(obj)
         })
         
    }
)

export const removeItemFromCart = createAsyncThunk(
    'cart_items/removeItemFromCart',
    async function (id,{rejectWithValue,dispatch}){
        await fetch (`https://6294732ca7203b3ed06939e5.mockapi.io/cart/${id}`,{
            method:'DELETE'
        })
        dispatch(getCartItemsFetch())
        
    }
)





export const {getCartItemsFetch,getItems,getPrice,removeItem} = cartItemsReducer.actions


export default cartItemsReducer.reducer