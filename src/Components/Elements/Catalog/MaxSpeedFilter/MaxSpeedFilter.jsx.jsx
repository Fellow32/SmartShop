import React, { useEffect, useRef, useState } from "react";
import arrowUp from '../../../../img/arrowUp.png'
import arrowDown from '../../../../img/arrowDown.png'
import Checkbox from "../Checkbox/Checkbox";
import style from './MaxSpeedFilter.module.scss'
import { useSelector,useDispatch } from "react-redux";
import { getItemsFetch } from "../../../../redux/reducers/hoverboardsReducer/hoverboardsSlice";
import { filteredByMaxSpeed, removeFilteredByMaxSpeed } from "../../../../redux/reducers/hoverboardsReducer/hoverboardsSlice";


const MaxSpeedFilter = () => {
 
  const  valuesByFilterMaxSpeed = useSelector(state => state.hoverboardsItems.valuesByFilterMaxSpeed)


   const [checkedOne,setCheckedOne] = useState(false)
   const [checkedTwo,setCheckedTwo] = useState(false)
   const [checkedThree,setCheckedThree] = useState(false)
   const [checkedFour,setCheckedFour] = useState(false)
   const [checkedFive,setCheckedFive] = useState(false)
   const[showFilter,setShowFilter] = useState(true)


   const dispatch = useDispatch()

   const handleChangeOne = () => {
    setCheckedOne(!checkedOne);
    if(checkedOne !== true){
      dispatch(getItemsFetch())
      setTimeout(() =>{dispatch(filteredByMaxSpeed(45))},500) 
    
      
    } else if(checkedOne !== false) {
      
      dispatch(removeFilteredByMaxSpeed(45))
       dispatch(getItemsFetch())
        setTimeout(() => {
          dispatch(filteredByMaxSpeed(null))
  
        },500)
       
       }
      
   

  };

  const handleChangeTwo = () => {
    setCheckedTwo(!checkedTwo);
    if(checkedTwo !== true){
      dispatch(getItemsFetch())
      setTimeout(() =>{dispatch(filteredByMaxSpeed(32))},500) 
    
      
    } else if(checkedTwo !== false) {   
     dispatch(removeFilteredByMaxSpeed(32)) 
     dispatch(getItemsFetch())
      setTimeout(() => {
        dispatch(filteredByMaxSpeed(null))

      },500)
     
  
   
   
     
      
    }
    
  };
  const handleChangeThree = () => {
    setCheckedThree(!checkedThree);
    if(checkedThree !== true){
      dispatch(getItemsFetch())
      setTimeout(() =>{dispatch(filteredByMaxSpeed(30))},500) 
    
      
    } else if(checkedThree !== false) {
      dispatch(removeFilteredByMaxSpeed(30))
      dispatch(getItemsFetch())
       setTimeout(() => {
         dispatch(filteredByMaxSpeed(null))
 
       },500)
      
    }
    
  };

  const handleChangeFour = () => {
    setCheckedFour(!checkedFour);
    if(checkedFour !== true){
      dispatch(getItemsFetch())
      setTimeout(() =>{dispatch(filteredByMaxSpeed(28))},500) 
    
      
    } else if(checkedFour !== false) {
      dispatch(removeFilteredByMaxSpeed(28))
      dispatch(getItemsFetch())
       setTimeout(() => {
         dispatch(filteredByMaxSpeed(null))
 
       },500)
      
    }
  };
  const handleChangeFive = () => {
    setCheckedFive(!checkedFive);
    if(checkedFive !== true){
      dispatch(getItemsFetch())
      setTimeout(() =>{dispatch(filteredByMaxSpeed(25))},500) 
    
      
    } else if(checkedFive !== false) {
      dispatch(removeFilteredByMaxSpeed(25))
      dispatch(getItemsFetch())
       setTimeout(() => {
         dispatch(filteredByMaxSpeed(null))
 
       },500)
      
      
    }
    
  };

 

  useEffect(() => {
    if( valuesByFilterMaxSpeed.length === 0) {
      dispatch(getItemsFetch())
    }
    
  },[valuesByFilterMaxSpeed])















  const handleFilter = () => {
    setShowFilter(!showFilter)
  }


    return (
        <div className={style.wrapper}>
           <div onClick={handleFilter} className={style.header}>
               <span>Максимальная скорость (км/ч)</span>
               { showFilter
               ? <img src={arrowUp} alt="arrowUp" />
               : <img src={arrowDown} alt="arrowDown" />
               }  
           </div>
         
           { showFilter
               ?  <> 
               <Checkbox
                name ={ 45}
                value ={45}
                checked = {checkedOne}
                handleChange ={handleChangeOne}/>
               <Checkbox
                name ={32}
                value ={32}
                checked = {checkedTwo}
                handleChange ={handleChangeTwo}/>
               <Checkbox
                name ={30}
                value ={30}
                checked = {checkedThree}
                handleChange ={handleChangeThree}/>
               <Checkbox
                name ={28}
                value ={28}
                checked = {checkedFour}
                handleChange ={handleChangeFour}/>
               <Checkbox
                name ={25}
                value ={25}
                checked = {checkedFive}
                handleChange ={handleChangeFive}/>
               
                </>
               : ''
               } 
   
            

         
             
         

           
        
          
          

        </div>
    )
}

export default MaxSpeedFilter