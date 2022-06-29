import React, { useEffect, useRef, useState } from "react";
import arrowUp from "../../../../img/arrowUp.png"
import arrowDown from "../../../../img/arrowDown.png"
import style from "./SortPopUp.module.scss"
import { useDispatch } from "react-redux";
import { sortPopUpByMaxPrice } from "../../../../redux/reducers/hoverboardsReducer/hoverboardsSlice";



const SortPopUp = () => {

       const dispatch = useDispatch()

    const filterArr = [ 'По популярности', 'Сначала дорогие', 'Сначала дешевые']
    const [filterItems, setIsFilterItem] = useState(false)
    
    
 
    const onClickFilterItems = () => {
        setIsFilterItem(!filterItems)
    }
 
     const refFilterItems = useRef()
 
    const handleOutsideClick = (e) => {
            if ( !e.path.includes(refFilterItems.current)) {
                setIsFilterItem(false)
            }
    } 
 
 
    const [activeItem,setActiveItem] = useState('По популярности')
 

    const onSelectedItem = (item) => {
        setActiveItem(item)
        setIsFilterItem(false)
    }
 
    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick)
    },[])
 
 
    const onHandleChange = (item) => {
        onSelectedItem(item)
        dispatch(sortPopUpByMaxPrice(item))
        
       
    }


    return (

        <div className={style.wrapper}>
              
              <div className={style.side_filters}></div>
              <div ref = {refFilterItems}  >
                  <div onClick={onClickFilterItems} className={style.filterBy}>
                      <span >{activeItem}</span>
                       { filterItems
                       ? <img src={arrowUp} alt="arrowDown" />
                       : <img src={arrowDown} alt="arrowDown" />
                       }
                     
                  </div>

                   { filterItems 
                   ? <div className={style.filter_list}>
                   <ul className={style.list}>
                       {filterArr.map((el,index) => (
                           <li
                            
                            onClick={() => onHandleChange(el)}
                            className={activeItem === index ? style.active : ' ' }
                           >{el}</li>
                       ))

                       }
 
                   </ul>
               </div>
                   : ''

                   }
                  




                 
              </div>



           </div>
        
    )
}


export default SortPopUp