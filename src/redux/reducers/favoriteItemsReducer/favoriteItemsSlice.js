import { createSlice } from "@reduxjs/toolkit";





const initialState = {
    itemsForLS : [],
    items : []
}






const favoriteItemsSlice = createSlice({
    name:'favoriteItems',
    initialState,
    reducers:{

       getItemsInFavorite : (state) => {
              
          const data = JSON.parse(localStorage.getItem('favoriteItems'))
           
          if ( data ){
            state.items = data.flat()
          }
         
          
          

          
       
              
             


             
       },

       addItemInFavorite : (state,action) => {
             state.itemsForLS = [...state.itemsForLS, action.payload]
             localStorage.setItem('favoriteItems',JSON.stringify(state.itemsForLS))
             

       },
       removeFromFavorite : (state,action) => {
                               
                          state.items = state.items.filter(el => el.name !== action.payload)
                          localStorage.clear()
                            
       } 




    }
})



export const {getItemsInFavorite,addItemInFavorite,removeFromFavorite} = favoriteItemsSlice.actions


export default favoriteItemsSlice.reducer