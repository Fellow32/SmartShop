import React, { useEffect, useRef, useState } from "react";
import arrowUp from '../../../../img/arrowUp.png'
import arrowDown from '../../../../img/arrowDown.png'
import style from './PriceFilter.module.scss'
import { useDispatch,useSelector } from "react-redux";
import { filteredByPrice, getItemsFetch } from "../../../../redux/reducers/hoverboardsReducer/hoverboardsSlice";

const PriceFilter = () => {



    const dispatch = useDispatch()

    
    

  const [minValue,setMinValue] = useState(0)
  const [maxValue,setMaxValue] = useState(100000)
  const [hideFilter,setHideFilter] = useState(true)
  const priceGap = 10000
  const minProgress = minValue  * 0.001
  const maxProgress = 100 - (maxValue  * 0.001)
  
  const refMinValue = useRef()
  const refMaxValue = useRef()




  const getItemsFilteredByPrice = () => {
    dispatch(getItemsFetch())
    setTimeout(() => {
        dispatch( filteredByPrice({minValue,maxValue}))
    },500)
    
  }

  
 



  
  
 const onHandleMinValue = (e) => {
        setMinValue(refMinValue.current.value)
       
        
 }
 const onHandleMaxValue = () => {
    setMaxValue(refMaxValue.current.value)
}
       


 const toggleFilter = () => {
     setHideFilter(!hideFilter)
 }
 


    return (
        <div className={style.wrapper}>
           <div onClick={toggleFilter} className={style.header}>
               <span>Цена,₽</span>
               { hideFilter
               ? <img src={arrowUp} alt="arrowUp" />
               : <img src={arrowDown} alt="arrowUp" />
               }
               
           </div>
              

              { hideFilter
              ?   <div>
              <div className={style.field}>
             <div className={style.min} >
                 <span>от</span>
                 <input className={style.input_min} type="number"  value={minValue} />
             </div>
             <div className={style.max} >
                 <span>до</span>
                 <input className={style.input_max} type="number"  value={maxValue} />
 
             </div>
 
            
 
             </div>
 
 
             <div className={style.slider}>
                 <div style={{ left:`${minProgress}%`,right:`${maxProgress}%`}} className={style.progress}></div>
             </div>
 
             <div className={style.range_input}>
                 <input onChange={onHandleMinValue} ref ={refMinValue} className={style.range_min} type="range"  min="0" max ="100000" value={minValue}  />
                 <input onChange={onHandleMaxValue} ref ={refMaxValue} className={style.range_max}  type="range"  min="0" max ="100000"  value={maxValue}/>
             </div>
             <div onClick={getItemsFilteredByPrice} className={style.button}>
                 
              Применить
                 </div>
 
             </div>
              : ''
             
             

              }
            
        

        </div>
    )
}

export default PriceFilter