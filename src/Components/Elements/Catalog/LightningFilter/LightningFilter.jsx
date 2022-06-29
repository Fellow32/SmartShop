import React, { useEffect, useRef, useState } from "react";
import arrowUp from '../../../../img/arrowUp.png'
import arrowDown from '../../../../img/arrowDown.png'
import Checkbox from "../Checkbox/Checkbox";
import style from './LightningFilter.module.scss'

import { useDispatch, useSelector } from "react-redux";
import { getItemsFetch, getItemsWithLightning,getItemsWithOutLightning } from "../../../../redux/reducers/hoverboardsReducer/hoverboardsSlice";


const LightningFilter = () => {
 
  


   const [checkedOne,setCheckedOne] = useState(false)
   const [checkedTwo,setCheckedTwo] = useState(false)
   const[showFilter,setShowFilter] = useState(true)
   const dispatch = useDispatch()


   const handleChangeOne = () => {
    setCheckedOne(!checkedOne);
    setCheckedTwo(false)
      if(checkedOne !== true){
        dispatch(getItemsFetch())
        setTimeout(() =>{dispatch(getItemsWithLightning())},500) 
      } else {
        dispatch(getItemsFetch())
      }
  
  };

  const handleChangeTwo = () => {
    setCheckedTwo(!checkedTwo);
    setCheckedOne(false)

     if(checkedTwo !== true){
      dispatch(getItemsFetch())
      setTimeout(() => {
       dispatch(getItemsWithOutLightning()) },500)
     } else {
      dispatch(getItemsFetch())
     }
    
    
    
  };



  const handleFilter = () => {
    setShowFilter(!showFilter)
  }











    return (
        <div className={style.wrapper}>
           <div onClick={handleFilter} className={style.header}>
               <span>Подсветка</span>
               { showFilter
               ? <img src={arrowUp} alt="arrowUp" />
               : <img src={arrowDown} alt="arrowDown" />
               }  
           </div>
         
           { showFilter
               ?  <> < Checkbox 
               name ="Да"
               checked = {checkedOne}
               handleChange ={handleChangeOne}
                />
              <Checkbox
                name ="Нет"
                checked = {checkedTwo}
                handleChange ={handleChangeTwo}
              />
                </>
               : ''
               } 
   
            

         
             
         

           
        
          
          

        </div>
    )
}

export default LightningFilter