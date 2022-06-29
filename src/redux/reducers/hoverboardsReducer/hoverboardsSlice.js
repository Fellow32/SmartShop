import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    items: [],
    isLoading: false,
    valuesByFilterPower :  [],
    valuesByFilterMaxSpeed :  []
    

}



const hoverboardsSlice = createSlice({
    name:"hoverboards_items",
    initialState,
    reducers:{
        getItemsFetch :(state) => {
            state.isLoading =  true
        },

        getItems : (state,action) => {
              state.items = action.payload
              state.isLoading = false
            
        },





         sortPopUpByMaxPrice : ( state,action) => {

                  if ( action.payload == 'Сначала дорогие') {
                     state.items = state.items.sort((a,b) => b.currentPrice - a.currentPrice)
                  } else if ( action.payload == 'Сначала дешевые') {
                    state.items = state.items.sort((a,b) => a.currentPrice - b.currentPrice)
                  } else {
                    state.items = state.items.sort((a,b) => b.rating - a.rating)
                  }

                 


         },










         filteredByPrice : (state,action) => {
                    
            const arr = state.items.map(el => el.currentPrice)
           
                     for(let i =0 ; i < arr.length; i++){
                        if (arr[i] < action.payload.minValue || arr[i] > action.payload.maxValue){
                            arr.splice(i,1);
                            i--
                        }
                     }
                     console.log(arr)

                     
                state.items = state.items.filter(el=> arr.includes(el.currentPrice))  

                
                 


         },










        getItemsWithLightning : (state) => { 
              
                state.items = state.items.filter((el) => el.lightning === 'true')
                

        }, 
        getItemsWithOutLightning : (state) => { 

             state.items = state.items.filter((el) => el.lightning === 'false')

      },
      
        filteredByEnginePower : (state,action) => {
   
            state.valuesByFilterPower = [...state.valuesByFilterPower, action.payload]
             const arr = state.items.map(el => el.enginePower)
             let resArr = []
             for(let i =0 ; i <= arr.length; i ++){
                for(let j=0; j<= state.valuesByFilterPower.length; j ++){
                   
                    if(arr[i] === state.valuesByFilterPower[j] ){
                      resArr = [...resArr,arr[i]]
                    }
                }
             }
                    
             state.items = state.items.filter(el => resArr.includes(el.enginePower))
             state.valuesByFilterPower = state.valuesByFilterPower.filter(el => el !== null)
             

        } ,


        removeFilteredByEnginePower : (state,action) => {
                  state.valuesByFilterPower = state.valuesByFilterPower.filter(el => el !== action.payload )
                  
      
    },  
    
    
    
    
          filteredByMaxSpeed :(state,action) => {

           
        state.valuesByFilterMaxSpeed = [...state.valuesByFilterMaxSpeed, action.payload]
        const arr = state.items.map(el => el.maxSpeed)
        let resArr = []
        for(let i =0 ; i <= arr.length; i ++){
           for(let j=0; j<= state.valuesByFilterMaxSpeed.length; j ++){
              
               if(arr[i] === state.valuesByFilterMaxSpeed[j] ){
                 resArr = [...resArr,arr[i]]
               }
           }
        }
               
        state.items = state.items.filter(el => resArr.includes(el.maxSpeed))
        state.valuesByFilterMaxSpeed = state.valuesByFilterMaxSpeed.filter(el => el !== null)
    },

        removeFilteredByMaxSpeed: (state,action) =>{
            state.valuesByFilterMaxSpeed = state.valuesByFilterMaxSpeed.filter(el => el !== action.payload )
        }
         
    } 
})




export const {getItemsFetch,getItems,getItemsWithLightning,getItemsWithOutLightning,
    filteredByEnginePower,
     removeFilteredByEnginePower,
     filteredByMaxSpeed,
    removeFilteredByMaxSpeed,
    filteredByPrice,
     sortPopUpByMaxPrice} = hoverboardsSlice.actions

export default hoverboardsSlice.reducer