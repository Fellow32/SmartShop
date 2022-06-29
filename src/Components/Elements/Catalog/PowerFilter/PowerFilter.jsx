import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import arrowUp from '../../../../img/arrowUp.png'
import arrowDown from '../../../../img/arrowDown.png'
import Checkbox from "../Checkbox/Checkbox";
import style from './PowerFilter.module.scss'
import { filteredByEnginePower, getItemsFetch, removeFilteredByEnginePower } from "../../../../redux/reducers/hoverboardsReducer/hoverboardsSlice";



const PowerFilter = () => {
 

 const  valuesByFilterPower = useSelector(state => state.hoverboardsItems.valuesByFilterPower)
 

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
      setTimeout(() =>{dispatch(filteredByEnginePower(2100))},500) 
    
      
    } else if(checkedOne !== false) {
      
      dispatch(removeFilteredByEnginePower(2100))
       dispatch(getItemsFetch())
        setTimeout(() => {
          dispatch(filteredByEnginePower(null))
  
        },500)
       
       }
      
   

  };

  const handleChangeTwo = () => {
    setCheckedTwo(!checkedTwo);
    if(checkedTwo !== true){
      dispatch(getItemsFetch())
      setTimeout(() =>{dispatch(filteredByEnginePower(500))},500) 
    
      
    } else if(checkedTwo !== false) {   
     dispatch(removeFilteredByEnginePower(500)) 
     dispatch(getItemsFetch())
      setTimeout(() => {
        dispatch(filteredByEnginePower(null))

      },500)
     
  
   
   
     
      
    }
    
  };
  const handleChangeThree = () => {
    setCheckedThree(!checkedThree);
    if(checkedThree !== true){
      dispatch(getItemsFetch())
      setTimeout(() =>{dispatch(filteredByEnginePower(350))},500) 
    
      
    } else if(checkedThree !== false) {
      dispatch(removeFilteredByEnginePower(350))
      dispatch(getItemsFetch())
       setTimeout(() => {
         dispatch(filteredByEnginePower(null))
 
       },500)
      
    }
    
  };

  const handleChangeFour = () => {
    setCheckedFour(!checkedFour);
    if(checkedFour !== true){
      dispatch(getItemsFetch())
      setTimeout(() =>{dispatch(filteredByEnginePower(300))},500) 
    
      
    } else if(checkedFour !== false) {
      dispatch(removeFilteredByEnginePower(300))
      dispatch(getItemsFetch())
       setTimeout(() => {
         dispatch(filteredByEnginePower(null))
 
       },500)
      
    }
  };
  const handleChangeFive = () => {
    setCheckedFive(!checkedFive);
    if(checkedFive !== true){
      dispatch(getItemsFetch())
      setTimeout(() =>{dispatch(filteredByEnginePower(250))},500) 
    
      
    } else if(checkedFive !== false) {
      dispatch(removeFilteredByEnginePower(250))
      dispatch(getItemsFetch())
       setTimeout(() => {
         dispatch(filteredByEnginePower(null))
 
       },500)
      
      
    }
    
  };


  useEffect(() => {
    if( valuesByFilterPower.length === 0) {
      dispatch(getItemsFetch())
    }
    
  },[valuesByFilterPower])
  

 

  const handleFilter = () => {
    setShowFilter(!showFilter)
  }







 

    return (
        <div className={style.wrapper}>
           <div onClick={handleFilter} className={style.header}>
               <span>Мощность двигателя (Ватт)</span>
               { showFilter
               ? <img src={arrowUp} alt="arrowUp" />
               : <img src={arrowDown} alt="arrowDown" />
               }  
           </div>
         
           { showFilter
               ?  <> 
               <Checkbox
               name ={2100}
                value ={2100}
                checked = {checkedOne}
                handleChange ={handleChangeOne}/>
               <Checkbox
               name ={500}
                value ={500}
                checked = {checkedTwo}
                handleChange ={handleChangeTwo}/>
               <Checkbox
               name ={350}
                value ={350}
                checked = {checkedThree}
                handleChange ={handleChangeThree}/>
               <Checkbox
               name ={300}
                value ={300}
                checked = {checkedFour}
                handleChange ={handleChangeFour}/>
               <Checkbox
               name ={250}
                value ={250}
                checked = {checkedFive}
                handleChange ={handleChangeFive}/>
               
                </>
               : ''
               } 
   
            

         
             
         

           
        
          
          

        </div>
    )
}

export default PowerFilter