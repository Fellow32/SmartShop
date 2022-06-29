import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [ ],
  isLoading: false,
  price: 0,
  totalCount: 0,
  
 
};

export const cartItemsReducer = createSlice({
  name: "cart_items",
  initialState,
  reducers: {
    getCartItemsFetch: (state) => {
      state.isLoading = true;
    },

    getItems: (state, action) => {
      state.items = action.payload;
      state.totalCount = [].concat.apply([], Object.values(state.items)).length;
      state.price = state.items.reduce((sum, el) => {
        return (sum + (el.currentPrice * el.amount )) ;
      }, 500);
    },

     addItem : (state,action) => {
      const findItem = state.items.find((el) => el.id == action.payload)
     
      if(findItem) {
       
        findItem.amount ++ }
      

            state.price = state.items.reduce((sum,el) => {
             return (el.amount * el.currentPrice) + sum
            },500)

            

           
     },
      
      minusItem : ( state,action) => {
        const findItem = state.items.find((el) => el.id == action.payload)
       if(findItem) 
       {findItem.amount > 1 ? findItem.amount -- : findItem.amount = 1} 

        state.price = state.items.reduce((sum,el) => {
         return (el.amount * el.currentPrice) + sum
        },500)
      },


    removeItem: (state, action) => {
      state.items = state.items.filter((el) => el.id !== action.payload.id);
     
    },
     
  },
});

export const addItemInCart = createAsyncThunk(
  "cart_items/addItemInCart",
  async function (obj, { dispatch }) {
    await fetch("https://6294732ca7203b3ed06939e5.mockapi.io/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });
    dispatch(getCartItemsFetch())
    
    
  }
);

export const removeItemFromCart = createAsyncThunk(
  "cart_items/removeItemFromCart",
  async function (id, { rejectWithValue, dispatch }) {
    await fetch(`https://6294732ca7203b3ed06939e5.mockapi.io/cart/${id}`, {
      method: "DELETE",
    });
    dispatch(getCartItemsFetch())
   
    
  }
);

export const { getCartItemsFetch, getItems, getPrice, removeItem,getFullPrice,addItem,minusItem } =
  cartItemsReducer.actions;

export default cartItemsReducer.reducer;
